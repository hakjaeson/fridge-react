import { Outlet } from "react-router-dom";

const Fridge = () => {
  const myList = ["어묵", "새우", "신라면", "당근", "양파"];
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Fridge;
