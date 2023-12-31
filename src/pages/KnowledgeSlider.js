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

const Slider = () => {
  const numberOfSlides = data.knowledgeSlider.length.toString(); 
  const [counter, setCounter] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const slides = [];
  const slides2 = [];
  for (let i = 1; i <= numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <div className="knowledge_slider">
          <KnowledgeSliderText id={i.toString()} />
        </div>
      </SwiperSlide>
    );
    slides2.push(
      <SwiperSlide key={i}>
        <div className="knowledge_slider">
          <KnowledgeSliderBackgroundPhotos
            id={i.toString()}
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

      <div
        className={isActive ? "shadow_white_left_zoom" : "shadow_white_left"}
      />
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
          pagination={{
            type: "fraction",
          }}
          onSwiper={setFirstSwiper}
          modules={[Controller]}
          controller={{ control: secondSwiper }}
          className="mySwiper3"
        >
          {slides}
        </Swiper>
      </div>
      <div className={isActive ? "nd_slider_zoom" : "nd_slider"}>
        <Swiper
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
        <SwipeLeft />
        <p className="swipe_txt">{data.swipe}</p>
      </div>
    </div>
  );
};

export default Slider;
