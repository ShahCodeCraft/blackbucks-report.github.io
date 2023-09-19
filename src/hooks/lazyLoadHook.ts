import { useEffect, useRef, useState } from "react";

function useLazyLoading(options: any) {
  const ref: any = useRef();
  const [visisble, setVisible] = useState(false);
  const observerRef: any = useRef();

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }
  }, [ref, options]);
  return [ref, visisble];
}

export default useLazyLoading;
