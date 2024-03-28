import styled from "@emotion/styled";

export const ReadWrap = styled.div`
  /* display: flex;
  justify-content: center; */
  padding: 30px 0;
  width: 70vw;
  background-color: pink;
`;
export const ItemWrap = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  border: 1px solid black;
  padding: 20px 0;
  width: 100%;
  gap: 20px;
  .item-title {
    font-family: "GmarketSansMedium";
    font-size: 1.4rem;
    text-align: center;
    width: 20%;
    border-right: 1px solid black;
  }
  .item-content {
    width: 80%;
    font-size: 1rem;
  }
`;
export const ButtonWrap = styled.div`
  padding: 10px 0;
  gap: 10px;
  display: flex;
  float: right;
`;
