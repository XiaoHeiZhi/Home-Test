"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import carouselOne from "@/public/Image/carousel-one.jpg";
import carouselTwo from "@/public/Image/carousel-two.jpeg";
import carouselThree from "@/public/Image/carousel-three.png";

export default function MySwiper() {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={carouselOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carouselTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carouselThree} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
