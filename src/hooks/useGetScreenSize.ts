import { useEffect, useState } from "react";

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined")
        setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
