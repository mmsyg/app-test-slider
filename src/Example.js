import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import QuizzDescription from './QuizzDescription';
import QuizzSummary from './QuizzSumary';
import SetLeft from './SetLeft';


const MySlider = () => {
  return (
  
    <div className="swiper">  
    <SetLeft backNotVisible={0} back="slider" />
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        { <div>Slide 1 Content</div>}
      </SwiperSlide>
      <SwiperSlide>
        { <div>Slide2 Content</div>}
      </SwiperSlide>
   
    </Swiper></div>
  );
};

export default MySlider;
