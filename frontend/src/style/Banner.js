import React, { useState, useEffect } from "react";
import "./banner.css";

const banners = [
  "https://via.placeholder.com/1200x400?text=Banner+1",
  "https://via.placeholder.com/1200x400?text=Banner+2",
  "https://via.placeholder.com/1200x400?text=Banner+3",
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="banner-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <div className="slide" key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default App;
