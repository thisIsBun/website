import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import GlobalStyle from './components/Global.style.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.js';
import ToastProvider from './utils/toast/Toast.context.js';

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}`,
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ToastProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ToastProvider>
    </StrictMode>,
  );
}
