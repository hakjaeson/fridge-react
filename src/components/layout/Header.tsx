import useCustomHook from "../../hook/useCustomHook";
import { MoveButton } from "../../style/board/ListStyle";
import { HeaderWrapper } from "../../style/LayoutStyles";

const Header = () => {
  const { MoveBoardList, MoveFridgeList, MoveToRoot } = useCustomHook();

  const handleClickHome = () => {
    MoveToRoot();
  };
  const handleClickBoard = () => {
    MoveBoardList();
  };
  const handleClickFridge = () => {
    MoveFridgeList();
  };
  return (
    <HeaderWrapper>
      {/* <div>여기엔 뭐적냐</div> */}
      <div className="logo-wrapper" onClick={handleClickHome}>
        <img src={"/images/logo.svg"} alt="로고" />
      </div>
      <div style={{ display: "flex", gap: "1rem", marginRight: "1rem" }}>
        <MoveButton onClick={handleClickFridge}>냉장고</MoveButton>
        <MoveButton onClick={handleClickBoard}>메모장</MoveButton>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
