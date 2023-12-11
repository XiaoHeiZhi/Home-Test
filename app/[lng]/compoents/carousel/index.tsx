"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export default function MySwiper({
  ImageArr,
}: {
  ImageArr: StaticImageData[];
}) {
  const [springs, setSprings] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(80px)",
  }));

  const [textVisbly, setTextVisbly] = useState(true);

  useEffect(() => {
    setSprings.start({
      opacity: 1,
      transform: "translateY(0px)",
    });
  }, []);

  return (
    <div className="relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
        touchMoveStopPropagation={true}
        onTransitionEnd={() => {
          setTextVisbly(true);
          setSprings.start({ opacity: 1, transform: "translateY(0px)" });
        }}
        onSlideChange={() => {
          setTextVisbly(false);
          setSprings.start({ opacity: 0, transform: "translateY(80px)" });
        }}
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
              <animated.div
                style={springs}
                className={`${
                  textVisbly ? "" : "hidden"
                } absolute bottom-1/2 left-[13%] w-box text-white `}
              >
                <div className=" font-bold font-Poppins text-[24px]">
                  One Million Data in the Air
                </div>
                <div>{`
                    In 2019, a dedicated team of researchers initiated an extraordinary journey of
                    discovery by outfitting mana, a Heuglin's Gull in Salalah, with DEBUT LEGO
                    device. What followed in the subsequent years was an awe- inspiring saga, as
                    Omana's flight records unveiled a remarkable tale of three migrations.
                    Read more
                `}</div>
              </animated.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
