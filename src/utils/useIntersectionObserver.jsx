import { useState, useRef, useEffect } from "react";

const useIntersectionObserver = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const callbackFunction = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (currentElement) {
      observer.observe(currentElement);
    }
  }, []);

  return [isIntersecting, elementRef];
};

export default useIntersectionObserver;
