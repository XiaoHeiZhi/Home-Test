// "use client";

import { useTranslation } from "@/app/i18n";
import MySwiper from "./compoents/carousel";
// import { animated, useSpring } from "@react-spring/web";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = await useTranslation(lng);

  // 设置动画
  // const springs = useSpring({
  //   from: { opacity: 0, transform: "translateY(50px)" },
  //   to: { opacity: 1, transform: "translateY(0px)" },
  //   reset: true,
  // });

  return (
    <>
      <MySwiper />
      {/* <animated.div
        style={{ width: 80, height: 80, background: "blue", ...springs }}
      /> */}
    </>
  );
}
