import React, { useState } from "react";
import { IngredientWrap } from "../../style/fridge/ListStyle";
import { hover } from "@testing-library/user-event/dist/hover";

type IngredientComponentProps = {
  myList: string[];
};
const IngredientComponent: React.FC<IngredientComponentProps> = ({
  myList,
}) => {
  // @COMMENT 각 재료를 배열로 관리
  const [deleteVisual, setDeleteVisual] = useState(
    Array(myList.length).fill(false),
  );

  // @FN 재료 삭제
  const handleClickDelete = (index: number) => {
    console.log("delete pk : ", index);
  };
  // @AREA Hover
  const handleClickHover = (index: number) => {
    const hoverUpdate = [...deleteVisual];
    hoverUpdate[index] = true;
    setDeleteVisual(hoverUpdate);
    // console.log("hover -ing + index_num", index);
  };
  const handleClickHoverCancel = (index: number) => {
    const hoverUpdate = [...deleteVisual];
    hoverUpdate[index] = false;
    setDeleteVisual(hoverUpdate);
    // console.log("hover - end");
  };
  return (
    <IngredientWrap>
      {myList.map((item, index) => (
        <div
          className="ingredient-item"
          key={index}
          onMouseOver={() => handleClickHover(index)}
          onMouseOut={() => handleClickHoverCancel(index)}
        >
          {deleteVisual[index] ? (
            <div
              className="delete-hover"
              onClick={() => handleClickDelete(index)}
            >
              <span>삭제하기</span>
            </div>
          ) : (
            <></>
          )}
          <span>{item}</span>
        </div>
      ))}
    </IngredientWrap>
  );
};

export default IngredientComponent;
