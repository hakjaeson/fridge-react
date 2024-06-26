import styled from "@emotion/styled";

// @AREA Layout-style
export const LayoutWrapper = styled.div`
  width: 100vw;
  height: auto;
  font-family: "Prentendard";
`;

// @AREA Main-style
export const MainWrapper = styled.main`
  position: relative;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

// @AREA Header-style
export const HeaderWrapper = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;

  .logo-wrapper {
    padding: 0px 30px;
    img {
      width: 200px;
      height: auto;
    }
  }
`;
