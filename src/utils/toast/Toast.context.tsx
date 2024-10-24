import React, { createContext, useState } from 'react';
import { ToastContainer, ToastItem } from '../../components/others/Toast.style';
import useTimeout from './useTimeout';

type ToastType = {
  message: string;
  close: () => void;
};

const Toast = ({ message, close }: ToastType) => {
  useTimeout(close);
  return (
    <ToastItem>
      <p>{message}</p>
    </ToastItem>
  );
};

type ToastContextType = {
  open: (message: string) => void;
  close: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

type ToastProviderProps = {
  children: React.ReactNode;
};

type ToastsType = {
  id: number;
  message: string;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastsType[]>([]);

  const openToast = (message: string) => {
    const newToast = {
      id: new Date().getTime(),
      message,
    };
    setToasts((prev) => {
      return [...prev, newToast];
    });
  };

  const closeToast = (id: number) => {
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
