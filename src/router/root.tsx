import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import fridgeRouter from "./fridgeRouter";

const MainPage = lazy(() => import("../page/mainPage"));
const FridgePage = lazy(() => import("../page/fridge/FridgePage"));
const BoardPage = lazy(() => import("../page/board/BoardPage"));

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
    children: fridgeRouter(),
  },
]);

export default router;
