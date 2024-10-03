import { useRef, useEffect } from "react";

const useTimeout = (cb, delay = 3000) => {
  const savedCallback = useRef(cb);

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

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
