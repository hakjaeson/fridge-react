import { Outlet } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const Fridge = () => {
  const myList = ["어묵", "새우", "신라면", "당근", "양파"];
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
};

export default Fridge;
