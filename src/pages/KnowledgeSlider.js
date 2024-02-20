import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SetLeft from "../components/SetLeft";
import SetRight from "../components/SetRight";
import { ReactComponent as SwipeLeft } from "../assets/swipeLeft.svg";
import { ReactComponent as PolygonBlueSmall } from "../assets/polygonBlueSmallKnowledge.svg";
import { ReactComponent as UnionGreenKn } from "../assets/unionGreen_knowledge.svg";
import { ReactComponent as QuestionNumberBG } from "../assets/numberQuestion.svg";
import Zoom from "../components/ZoomButton";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import data from "../assets/datta.json";
import { Pagination, Navigation } from "swiper/modules";
import QuestionNumber from "../components/QuestionNumber";
import KnowledgeSliderText from "../components/KnowledgeSliderText";
import { Controller } from "swiper/modules";
import KnowledgeSliderBackgroundPhotos from "../components/KnowledgeSliderBackgroundPhotos";
import { useState } from "react";
import {useAppContext} from "../context/app-data/useAppContext";

const Slider = () => {


  const appData = useAppContext();
  const { knowledge } = appData.screens;
  console.log(knowledge);
  
  const numberOfSlides = knowledge.knowledgeSlides.length.toString(); 
  const [counter, setCounter] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [renderKey, setRenderKey] = useState('swiping');

  useEffect(() => {
    // Opóźnienie aktualizacji klucza, aby pozwolić na zakończenie animacji
    const timer = setTimeout(() => {
      setRenderKey(isActive ? 'no-swiping' : 'swiping');
    }, 1000); // 500 ms opóźnienia

    return () => clearTimeout(timer); // Oczyszczenie timera przy odmontowywaniu komponentu
  }, [isActive]);
  const slides = [];
  const slides2 = [];
  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
       
        
        <div className="knowledge_slider">
   
          <KnowledgeSliderText num={i} id={i.toString()} />
        </div>
      </SwiperSlide>
    );
    slides2.push(
      <SwiperSlide key={i}>
        <div className="knowledge_slider">
          <KnowledgeSliderBackgroundPhotos
            id={i.toString()}
            num={i}
            isActive={isActive}
          />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="swiper-container">
      <SetLeft backNotVisible={0} back="slider" />
      <SetRight />
      <Zoom isActive={isActive} setIsActive={setIsActive} />
      <div className={isActive ? "question_number_knowledge_invisible":"question_number_knowledge"}>
      <QuestionNumber id={counter} top={1} height={1} max={numberOfSlides} />
      </div>
      <div
        className={isActive ? "shadow_white_left_zoom" : "shadow_white_left"}
      />

      <div className={isActive ? "swipe_left2" : "swipe_left_zoom2"}>
      <div
        className={isActive ? "photo_text_zoom" : "photo_text"}
      />
      <p className="photo_desc_txt"dir="ltr"
         dangerouslySetInnerHTML={{ __html: knowledge.knowledgeSlides[counter-1].slideImages[0].imageText}}></p>
    </div>
      <div
        className={isActive ? "shadow_white_right_zoom" : "shadow_white_right"}
      />

      <div
        className={isActive ? "blur_knowledge_zoom" : "blur_knowledge"}
       
      />
      <img
        className={isActive ? "blur_zoom" : "blur_zoom_hidden"}
        src="./img/blur_zoom.png"
        alt="blur"
      />
      <div
        className={
          isActive ? "blur_knowledge_blue_zoom" : "blur_knowledge_blue"
        }
      
      />
      {/* <PolygonBlueSmall className="polygon_blue_small_knowledge" />
      <UnionGreenKn className="union_green_knowledge" /> */}
      <div className={isActive ? "st_slider_zoom" : "st_slider"}>
        <Swiper
          key={renderKey} 
          allowTouchMove={!isActive}
          initialSlide={counter - 1} 
          pagination={{
            type: "fraction",
          }}
          onSwiper={setFirstSwiper}
          modules={[Controller]}
          controller={{ control: secondSwiper }}
          className="mySwiper3"
          onSlideChange={(swiper) => {
          setCounter(swiper.activeIndex +1)}}
        >
          {slides}
        </Swiper>
      </div>
      <div className={isActive ? "nd_slider_zoom" : "nd_slider"}>
        <Swiper
          key={renderKey} 
          initialSlide={counter - 1} 
            allowTouchMove={!isActive}
          pagination={{
            type: "fraction",
          }}
          onSwiper={setSecondSwiper}
          modules={[Controller]}
          controller={{ control: firstSwiper }}
          className="mySwiper4"
        >
          {slides2}
        </Swiper>
      </div>
      <div className={isActive ? "swipe_left_zoom" : "swipe_left"}>
        <SwipeLeft className={isActive ? "swipe_zoom" : "swipe"} />
        <p className="swipe_txt">{knowledge.swipeText}</p>
      </div>
    </div>
  );
};

export default Slider;
