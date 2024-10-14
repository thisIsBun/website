import { useRef, useEffect } from "react";

const useTimeout = (callback, delay = 3000) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(timeId);
    };
  }, [delay]);
};

export default useTimeout;
