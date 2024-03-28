import "./App.css";
import "normalize.css";

import router from "./router/root";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();
function App() {
  return (
    // User Recoil
    <RecoilRoot>
      {/* Use React-query */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
