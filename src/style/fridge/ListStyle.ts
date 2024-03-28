import styled from "@emotion/styled";

export const ListWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 70vw;

  .input-ingredient {
    padding: 3rem 0;
    form {
      display: flex;
      align-items: center;
      gap: 1rem;
      input {
        font-size: 1.4rem;
        width: 20rem;
        border: none;
        border-bottom: 1px solid black;
      }
      button {
        background: transparent;
        border: 1px solid #c9c9c9;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        &:hover {
          font-weight: 700;
          background: #c9c9c9;
        }
      }
    }
  }
`;
export const IngredientWrap = styled.div`
  position: relative;
  display: flex;
  padding: 30px 0px;
  font-size: 1.2rem;
  width: 100%;
  gap: 1rem;
  .ingredient-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    padding: 2rem 3rem;
    width: 5rem;
    height: 2rem;
    background-color: pink;
    span {
      font-family: "GmarketSansMedium";
      font-size: 1.4rem;
    }
    .delete-hover {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 1rem;
      z-index: 10;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      span {
        font-size: 1.2rem;
        color: white;
      }
    }
  }
`;
