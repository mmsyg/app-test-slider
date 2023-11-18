import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SetLeft from './SetLeft';
import SetRight from './SetRight';
import QuizzDescription from './QuizzDescription';
import Carousel from './Carousel';
import KnowledgeSlider from './KnowledgeSlider';

const MySlider = () => {
  const numberOfSlides = 2; // Określ liczbę slajdów, które chcesz wyrenderować

  // Generowanie slajdów z różnymi id dla KnowledgeSlider
  const slides = [];
  for (let i = 1; i <= numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <div>
          <KnowledgeSlider id={i.toString()} />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="swiper-container">
      <SetLeft backNotVisible={0} back="slider" />
      <SetRight />
      <Swiper
        spaceBetween={400}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default MySlider;
