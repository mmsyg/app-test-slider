import React, { useState } from 'react';

import KnowledgeSlider from './KnowledgeSlider';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = ["item1", "item2", "item3", "item4"];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-content">
       
        <KnowledgeSlider id={1} />
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
