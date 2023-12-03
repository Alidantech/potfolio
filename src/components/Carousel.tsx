// Carousel.js
import React, { useState, ReactNode } from "react";
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

  return (
    <CarouselWrapper>
      <Slide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
