import React, { useState, useRef, useEffect } from 'react';

const useIntersectionObserver = (): [boolean, React.RefObject<HTMLElement>] => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const callbackFunction = (entries: IntersectionObserverEntry[]): void => {
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

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [isIntersecting, elementRef];
};

export default useIntersectionObserver;
