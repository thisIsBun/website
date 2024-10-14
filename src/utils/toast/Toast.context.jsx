import { createContext, useState } from "react";
import { ToastContainer, ToastItem } from "../../components/others/Toast.style";
import useTimeout from "./useTimeout";

const Toast = ({ message, close }) => {
  useTimeout(close);
  return (
    <ToastItem>
      <p>{message}</p>
    </ToastItem>
  );
};

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const openToast = (message) => {
    const newToast = {
      id: new Date().getTime(),
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
      {toasts.length > 0 && (
        <ToastContainer>
          {toasts.map((toast) => {
            return (
              <Toast
                key={toast.id}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            );
          })}
        </ToastContainer>
      )}
    </ToastContext.Provider>
  );
};

export { ToastContext };
export default ToastProvider;
