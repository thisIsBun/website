import { createContext, useState } from "react";
import { ToastContainer, ToastItem } from "./Toast.style";
import useTimeout from "./useTimeout";

const Toast = ({ message, close }) => {
  useTimeout(() => {
    close();
  });

  return (
    <ToastItem>
      <p>{message}</p>
    </ToastItem>
  );
};

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const openToast = (message) => {
    const newToast = {
      id: new Date(),
      message,
    };
    setToasts((prev) => {
      return [...prev, newToast];
    });
  };

  const closeToast = (id) => {
    setToasts((prev) => {
      return prev.filter((toast) => {
        return toast.id !== id;
      });
    });
  };

  const contextValue = { open: openToast, close: closeToast };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer>
        {toasts &&
          toasts.map((toast) => {
            return (
              <Toast
                key={toast.id}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            );
          })}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
