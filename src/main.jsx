import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./components/Global.style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ToastProvider from "./utils/toast/Toast.context.jsx";

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}`,
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ToastProvider>
  </StrictMode>
);
