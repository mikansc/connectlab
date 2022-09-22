import { useState, useEffect } from "react";

export const useMatchMedia = (mediaTrigger = "600px") => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      const matchMedia = window.matchMedia(`(max-width: ${mediaTrigger})`);
      setIsMatch(matchMedia.matches);
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [mediaTrigger]);

  return isMatch;
};
