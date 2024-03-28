import { useQuery } from "@tanstack/react-query";
import useCustomHook from "../../hook/useCustomHook";
import { getRead } from "../../api/boardApi";
import { useMemo } from "react";
import { CreateFormInfo } from "../../interface/boardInterface";
import { useParams } from "react-router-dom";
import { ButtonWrap, ItemWrap, ReadWrap } from "../../style/board/ReadStyle";
import { MoveButton, TitleWrap } from "../../style/board/ListStyle";

const ReadPage = () => {
  // @FN
  const { no } = useParams();

  const { MoveBaordEdit } = useCustomHook();

  const initState: CreateFormInfo = {
    title: "",
    content: "",
    ingredient: [""],
    writer: "",
    createDate: "",
  };
  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getRead(),
  });
  const serverData = useMemo(() => data || initState, [data]);
  console.log("response data :", serverData);

  // @FN Edit page
  const handleClickEdit = (no: number) => {
    // const parseNo = Number(no);
    MoveBaordEdit(no);
  };
  // @FN Delete
  const handleClickDelete = () => {
    console.log("삭제 버튼 활성화");
  };

  const itemColumn = ["글제목", "작성자명", "작성날짜", "재료", "작성글"];
  const content = [
    `${serverData.title}`,
    `${serverData.writer}`,
    `${serverData.createDate}`,
    `${serverData.ingredient}`,
    `${serverData.content}`,
  ];
  return (
    <div>
      <TitleWrap>
        <span>레서피 메모장</span>
      </TitleWrap>
      <ReadWrap>
        {itemColumn.map((item, index) => (
          <ItemWrap key={index}>
            <div className="item-title">{item}</div>
            <div className="item-content">{content[index]}</div>
          </ItemWrap>
        ))}
      </ReadWrap>
      <ButtonWrap>
        <MoveButton onClick={() => handleClickEdit(1)}>수정하기</MoveButton>
        <MoveButton onClick={() => handleClickDelete()}>삭제하기</MoveButton>
      </ButtonWrap>
    </div>
  );
};

export default ReadPage;
