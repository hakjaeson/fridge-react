import { useMutation } from "@tanstack/react-query";
import useCustomHook from "../../hook/useCustomHook";
import { CreateFormInfo } from "../../interface/boardInterface";
import { ChangeEvent, useState } from "react";
import { postBoard } from "../../api/boardApi";
import dayjs from "dayjs";
import { InputWrap } from "../../style/board/ListStyle";

const CreatePage = () => {
  const { MoveBoardList } = useCustomHook();

  // @FN 현재날짜를 구하는 변수 nowdate (dayJS)
  const nowdate = dayjs().format("YYYY-MM-DD");

  // @COMMENT 데이터 폼 초기값 (initstate)
  const initState: CreateFormInfo = {
    title: "",
    content: "",
    ingredient: [""],
    writer: "hakjaeson",
    createDate: nowdate,
  };

  const [postData, setPostData] = useState<CreateFormInfo>(initState);

  // @FN React-query boarddata (POST)
  const postMutation = useMutation({
    mutationFn: (postData: CreateFormInfo) => postBoard({ postData }),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {},
  });

  // @FN 입력값 담기 => value값을 name 항목에 넣는 방식
  const handleChangeFormData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPostData(postData => ({ ...postData, [e.target.name]: e.target.value }));
  };

  // Submit
  const handleSubmit = () => {
    postMutation.mutate(postData);
    MoveBoardList();
  };
  return (
    <div>
      <InputWrap>
        <form>
          <label htmlFor="title">글제목</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={e => handleChangeFormData(e)}
          />
          <label htmlFor="ingredient">재료</label>
          <input
            type="text"
            name="ingredient"
            value={postData.ingredient}
            onChange={e => handleChangeFormData(e)}
          />
          <label htmlFor="content"></label>
          <textarea
            name="content"
            value={postData.content}
            onChange={e => handleChangeFormData(e)}
          />
          <button type="submit" onClick={handleSubmit}>
            작성완료
          </button>
        </form>
      </InputWrap>
    </div>
  );
};

export default CreatePage;
