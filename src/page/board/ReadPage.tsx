import React from "react";
import useCustomHook from "../../hook/useCustomHook";

const ReadPage = () => {
  const { MoveBaordEdit } = useCustomHook();
  const handleClickEdit = (no: number) => {
    // const parseNo = Number(no);
    MoveBaordEdit(no);
  };
  const handleClickDelete = () => {};
  return (
    <div>
      <div></div>
      <div>
        <button onClick={() => handleClickEdit(1)}>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default ReadPage;
