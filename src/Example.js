import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SetLeft from './SetLeft';
import SetRight from './SetRight';
import QuizzDescription from './QuizzDescription';
import Carousel from './Carousel';
import KnowledgeSlider from './KnowledgeSlider';
import {ReactComponent as SwipeLeft} from './assets/swipeLeft.svg'
import { ReactComponent as PolygonBlueSmall}from './assets/polygonBlueSmallKnowledge.svg';
import { ReactComponent as UnionGreenKn}from './assets/unionGreen_knowledge.svg';
import { ReactComponent as QuestionNumberBG } from './assets/numberQuestion.svg';
import Zoom from './ZoomButton';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import data from './assets/datta.json'; 

import QuestionNumber from './QuestionNumber';
import KnowledgeSliderText from './KnowledgeSliderText';

import KnowledgeSliderBackgroundPhotos from "./KnowledgeSliderBackgroundPhotos"
import { useState } from 'react';

const MySlider = () => {
  const numberOfSlides = data.knowledgeSlider.length.toString();// Określ liczbę slajdów, które chcesz wyrenderować
  const [counter, setCounter] =useState(1);
  // Generowanie slajdów z różnymi id dla KnowledgeSlider
  const slides = [];
  for (let i = 1; i <= numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <div className="knowledge_slider">
         <KnowledgeSliderBackgroundPhotos id= {i.toString()}/>
         <img className='blur_knowledge' src='./img/Blur.png' alt='blur' />
         <div className='num_of_slides'>
<QuestionNumber id={i.toString()} height={1} max={numberOfSlides} /></div>
      

<KnowledgeSliderText id={i.toString()}/>




    </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="swiper-container">
      <SetLeft backNotVisible={0} back="slider" />
      <SetRight />
      <Zoom/>
      <img className='blur_knowledge' src='./img/blur_blue.png' alt='blur' />
      <PolygonBlueSmall className='polygon_blue_small_knowledge' />
<UnionGreenKn className='union_green_knowledge'/>
      <Swiper
       grabCursor={false}
       effect={'creative'}
       creativeEffect={{
         prev: {
           shadow: false,
           translate: ['-20%', 0, -1],
         },
         next: {
           translate: ['100%', 0, 0],
         },
       }}
       modules={[EffectCreative]}
       className="mySwiper3"
      >
        {slides}
      </Swiper><div className="swipe_left">
       <SwipeLeft />
       <p className="swipe_txt">{data.swipe}</p>
    </div></div>
  );
};

export default MySlider;
