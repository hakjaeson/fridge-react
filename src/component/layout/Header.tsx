import useCustomHook from "../../hook/useCustomHook";
import { HeaderWrapper } from "../../style/LayoutStyles";

const Header = () => {
  const { MoveBoardList, MoveFridgeList } = useCustomHook();

  const handleClickBoard = () => {
    MoveBoardList();
  };
  const handleClickFridge = () => {
    MoveFridgeList();
  };
  return (
    <HeaderWrapper>
      {/* <div>여기엔 뭐적냐</div> */}
      <div className="logo-wrapper">
        <img src={"/images/logo.svg"} alt="로고" />
      </div>
      <div>
        <button onClick={handleClickFridge}>냉장고</button>
        <button onClick={handleClickBoard}>메모장</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
