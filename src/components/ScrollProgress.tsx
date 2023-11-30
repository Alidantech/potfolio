import React, { useState, useEffect } from "react";
import { ProgressBar } from "./styled/widgets/Widgets";


const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const calculateScrollWidth = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollWidth);
    return () => {
      window.removeEventListener("scroll", calculateScrollWidth);
    };
  }, []);

  return <ProgressBar width={scrollWidth} />;
};

export default ScrollProgress;
