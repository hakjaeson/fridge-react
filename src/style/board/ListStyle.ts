import styled from "@emotion/styled";

export const TitleWrap = styled.div`
  span {
    font-family: "GmarketSansMedium";
    font-size: 2.5rem;
  }
`;
export const ListTable = styled.table`
  font-family: "Pretendard";
  font-size: 1.4rem;
  width: 70vw;
  text-align: center;
  padding: 30px 0px;
  border: 2px solid black;
  border-collapse: collapse;
  border-spacing: 0;
  border-left: none;
  border-right: none;
  thead {
    th {
      border-top: 1px solid black;
      border-bottom: 1px solid c9c9c9;
      padding: 10px 0px;
    }
  }
  tbody {
    td {
      border-top: 1px solid #c9c9c9;
      border-bottom: 1px solid #c9c9c9;
      padding: 10px 0px;
    }
  }
`;
export const InputWrap = styled.div`
  width: 100%;
  padding: 30px 0;
  font-size: 1.2rem;
  form {
    display: flex;
    float: right;
    gap: 5px;
    input {
      width: 200px;
      height: 30px;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
    }
    button {
      /* border-radius: 50%; */
      cursor: pointer;
      width: 50px;
      border: none;
      border-radius: 5px;
      &:hover {
        font-weight: 700;
        background: #c9c9c9;
      }
    }
  }
`;
export const MoveButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  font-family: "GmarketSansMedium";
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
