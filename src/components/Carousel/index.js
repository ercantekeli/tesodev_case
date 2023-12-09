import React, { useState } from "react";
import { ArrowIcon } from "../../assets";

export const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const updateCarousel = () => {
    const newTransformValue = -currentIndex * 100 + "%";
    return { transform: `translateX(${newTransformValue})` };
  };

  const items = [1, 2, 3, 4]; // Carousel içerisindeki öğeler

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div onClick={prevSlide} className="left-arrow">
          <ArrowIcon style={{ transform: `rotate(180deg)` }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            transition: "transform 0.5s ease-in-out",
            ...updateCarousel(),
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 auto",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {item}
            </div>
          ))}
          {children}
        </div>
        <div onClick={nextSlide}>
          <ArrowIcon />
        </div>
      </div>

      {/* <button onClick={prevSlide}>Önceki</button>
      <button onClick={nextSlide}>Sonraki</button> */}
    </div>
  );
};
