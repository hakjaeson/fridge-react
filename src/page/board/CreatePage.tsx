import { useMutation } from "@tanstack/react-query";
import useCustomHook from "../../hook/useCustomHook";
import { CreateFormInfo } from "../../interface/boardInterface";
import { ChangeEvent, useState } from "react";
import { postBoard } from "../../api/boardApi";
import dayjs from "dayjs";

const CreatePage = () => {
  const { MoveBoardList } = useCustomHook();

  // @FN 현재날짜를 구하는 변수 nowdate (dayJS)
  const nowdate = dayjs().format("YYYY-MM-DD");

  // @COMMENT 데이터 폼 초기값 (initstate)
  const initState: CreateFormInfo = {
    title: "",
    content: "",
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
      <div>
        <form>
          글제목
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={e => handleChangeFormData(e)}
          />
          글내용
          <textarea
            name="content"
            value={postData.content}
            onChange={e => handleChangeFormData(e)}
          />
          <button type="submit" onClick={handleSubmit}>
            작성완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
