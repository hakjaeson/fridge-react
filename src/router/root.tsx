import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import fridgeRouter from "./fridgeRouter";
import boardRouter from "./boardRouter";

const MainPage = lazy(() => import("../page/MainPage"));
const FridgePage = lazy(() => import("../page/fridge/FridgePage"));
const BoardPage = lazy(() => import("../page/board/BoardPage"));

const NotFoundPage = lazy(() => import("../page/not-found/NotFound"));

const router = createBrowserRouter([
  // Route : RootPage
  {
    path: "/",
    element: (
      <Suspense fallback={<div>로딩 중..</div>}>
        <MainPage />
      </Suspense>
    ),
  },
  // Route : fridge
  {
    path: "/fridge",
    element: (
      <Suspense fallback={<div>로딩 중..</div>}>
        <FridgePage />
      </Suspense>
    ),
    children: fridgeRouter(),
  },
  // Route : board
  {
    path: "/board",
    element: (
      <Suspense fallback={<div>로딩 중..</div>}>
        <BoardPage />
      </Suspense>
    ),
    children: boardRouter(),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>로딩 중..</div>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export default router;
