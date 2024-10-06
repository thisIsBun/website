import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./components/Global.style.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import ToastProvider from "./components/toast/Toast.context.jsx";

const router = createBrowserRouter([
  {
    path: "/website/",
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
