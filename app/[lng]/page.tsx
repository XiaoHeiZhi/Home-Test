"use client";

import { useTranslation } from "@/app/i18n";
import { animated, useSpring } from "@react-spring/web";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = await useTranslation(lng);

  // 设置动画
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    // 重新挂载时候重置动画
    reset: true,
  });

  return (
    <>
      <div className="w-[400px] h-[400px]"></div>
      <animated.div
        style={{ width: 80, height: 80, background: "blue", ...springs }}
      />
    </>
  );
}
