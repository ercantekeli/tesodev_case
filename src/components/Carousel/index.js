import React, { useState } from "react";
import "./carousel.css";
import { ArrowIcon } from "../../assets";

export const Carousel = ({ items, onPreviousClick, onNextClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = items.slice(currentImageIndex, currentImageIndex + 3);

  return (
    <div>
      <div className="carousel-container">
        <button
          className="left-arrow"
          onClick={() =>
            setCurrentImageIndex(Math.max(0, currentImageIndex - 1))
          }
          disabled={currentImageIndex === 0}
        >
          <ArrowIcon />
        </button>
        <div className="carousel-img_container">
          {displayImages.map((item, index) => (
            <div
              className="carousel-img_item"
              key={index}
              style={{ marginRight: index < 2 ? "10px" : "0" }}
              onClick={() => setCurrentImageIndex(currentImageIndex + index)}
            >
              <img src={item?.src} alt={item?.alt} className="carousel-img" />
              <div className="carousel-desc">{item?.description}</div>
              <div className="carousel-subdesc">
                {item?.time} · {item?.person}
              </div>
            </div>
          ))}
        </div>
        <button
          className="right-arrow"
          onClick={() =>
            setCurrentImageIndex(
              Math.min(currentImageIndex + 1, items.length - 3)
            )
          }
          disabled={currentImageIndex === items.length - 3}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
