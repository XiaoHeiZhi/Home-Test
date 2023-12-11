// "use client";

import { useTranslation } from "@/app/i18n";
import MySwiper from "./compoents/carousel";
import carouselOne from "@/public/Image/carousel-one.jpg";
import carouselTwo from "@/public/Image/carousel-two.jpeg";
import carouselThree from "@/public/Image/carousel-three.png";
import carouselFour from "@/public/Image/carousel-four.jpeg";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = await useTranslation(lng);
  const imageArray = [carouselOne, carouselTwo, carouselThree, carouselFour];

  return (
    <>
      <MySwiper ImageArr={imageArray} />
    </>
  );
}


{
  /* <animated.div
        style={{ width: 80, height: 80, background: "blue", ...springs }}
      /> */
}
