import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {  Thumbs } from "swiper";
import { ReactComponent as LeftArrow } from "../../../assets/left-arrow.svg";
import SwiperCore from "swiper/core"
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss';
import 'swiper/scss/pagination';



import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow,
} from "./styles";

SwiperCore.use([Navigation, Thumbs]);

function Gallery({
  slides = [], // список слайдов, каждый слайд — это src картинки и alt
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <StyledSwiper
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        spaceBetween={20}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Gallery;
