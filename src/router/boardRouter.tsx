import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const LazyCreatePage = lazy(() => import("../page/board/CreatePage"));
const LazyReadPage = lazy(() => import("../page/board/ReadPage"));
const LazyListPage = lazy(() => import("../page/board/Listpage"));
// @COMMENT board(게시판 페이지)
const boardRouter = () => {
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
    {
      path: "create",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <LazyCreatePage />
        </Suspense>
      ),
    },
    {
      path: "read",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <LazyReadPage />
        </Suspense>
      ),
    },
  ];
};

export default boardRouter;
