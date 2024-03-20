import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const LazyListPage = lazy(() => import("../page/fridge/ListPage"));
// @COMMENT fridge(냉장고 페이지)
const fridgeRouter = () => {
  return [
    { path: "", element: <Navigate to="list" /> },
    {
      path: "list",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <LazyListPage />
        </Suspense>
      ),
    },
  ];
};

export default fridgeRouter;
