import { useContext } from "react";
import { ToastContext } from "./Toast.context";

const useToast = () => {
  return useContext(ToastContext);
};

export default useToast;
