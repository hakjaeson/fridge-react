import useCustomHook from "../../hook/useCustomHook";

const NotFound = () => {
  const { MovePrev } = useCustomHook();
  return (
    <div>
      <div>여기는 온탕이라고! 되돌아가!</div>
      <button onClick={MovePrev}>되돌아가기</button>
    </div>
  );
};

export default NotFound;
