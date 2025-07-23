import { useState, useEffect, RefObject } from "react";

const useRefSize = (ref: RefObject<HTMLElement>) => {
  const [refSize, setRefSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setRefSize({ width, height });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return refSize;
};

export default useRefSize;
