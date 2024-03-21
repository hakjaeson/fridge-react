import { useNavigate } from "react-router-dom";

const useCustomHook = () => {
  // @AREA Hooks
  const navigate = useNavigate();

  // @FN Board-create
  const MoveBoardCreate = () => {
    navigate("/board/create");
  };
  // @FN Board-list
  const MoveBoardList = () => {
    navigate("/board/list");
  };
  // @FN Borad-edit
  const MoveBaordEdit = (no: number) => {
    navigate(`/board/edit/${no}`);
  };

  // @FN Fridge-list
  const MoveFridgeList = () => {
    navigate("/fridge/list");
  };
  //   @FN Prev-page
  const MovePrev = () => {
    navigate(-1);
  };
  return {
    MoveBoardList,
    MoveFridgeList,
    MoveBoardCreate,
    MoveBaordEdit,
    MovePrev,
  };
};

export default useCustomHook;
