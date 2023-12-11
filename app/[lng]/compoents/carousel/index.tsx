"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

export default function MySwiper({
  ImageArr,
}: {
  ImageArr: StaticImageData[];
}) {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        {ImageArr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={item.src}
                alt="Your Image"
                width={800}
                height={100}
                layout="responsive"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
