import { Outlet } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const BoardPage = () => {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
};

export default BoardPage;
