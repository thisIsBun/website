import { useContext } from "react";
import { ToastContext } from "./Toast.context";

const useToast = () => useContext(ToastContext);

export default useToast;
