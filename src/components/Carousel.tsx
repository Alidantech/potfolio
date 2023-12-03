// Carousel.js
import React, { useState, useEffect, ReactNode } from "react";
import {
  CarouselWrapper,
  Indicator,
  IndicatorWrapper,
  Slide,
} from "./styled/items/Carousel.styled";

interface CarouselProps {
  slides: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the carousel index automatically after 1 second
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, slides.length]);

  return (
    <CarouselWrapper>
      <Slide style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slide>
      <IndicatorWrapper>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            $isActive={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
