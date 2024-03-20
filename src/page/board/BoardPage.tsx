import React from "react";
import { Outlet } from "react-router-dom";

const BoardPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BoardPage;
