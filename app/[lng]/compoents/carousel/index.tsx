"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { a, animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MySwiper({
  ImageArr,
  textArray,
  lng,
}: {
  ImageArr: StaticImageData[];
  textArray: Array<{ title: string; context: string }>;
  lng: string;
}) {
  const [springs, setSprings] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(80px)",
  }));

  const [textVisbly, setTextVisbly] = useState(true);

  const switchA = (i: number) => {
    switch (i) {
      case 0:
        return (
          <Link
            href={`/${lng}/stories/a-million-data-in-the-air/`}
            className=" text-blue-300 pl-2"
          >
            Read more...
          </Link>
        );
      case 1:
        return (
          <Link href={`/${lng}/`} className=" text-blue-300 pl-2">
            Learn more...
          </Link>
        );
      case 2:
        return (
          <Link
            href={`https://www.ecotopiago.com/#/login`}
            className=" text-blue-300 pl-2"
            target="_black"
          >
            Login in
          </Link>
        );
      case 3:
        return (
          <Link href={`/resources/`} className=" text-yellow-300 pl-2">
            DownLoad
          </Link>
        );
    }
  };

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
                  {textArray[i].title}
                </div>
                <div>
                  {textArray[i].context}
                  {switchA(i)}
                </div>
              </animated.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
