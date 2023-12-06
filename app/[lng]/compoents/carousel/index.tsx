"use client";
import Image from "next/image";
import firstImg from "@/public/Image/first.jpg";
import secondImg from "@/public/Image/second.jpg";
import { useEffect, useState } from "react";

export default function Carousel() {
  const imageArr = [firstImg, secondImg];
  const [curretImage, setCurretImage] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (curretImage <= imageArr.length - 2) {
        let curret = curretImage + 1;
        setCurretImage(curret);
      } else {
        setCurretImage(0);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [curretImage]);

  return (
    <>
      <div className="relative max-h-[650px] flex flex-col overflow-hidden items-center justify-end">
        <Image src={imageArr[curretImage]} alt="" layout="responsive" className=" cursor-pointer"/>
        <ul className="flex absolute bottom-0 mb-4 ">
          {imageArr.map((item, i) => {
            return (
              <li
                onClick={() => setCurretImage(i)}
                key={i}
                className={`w-2 h-2  hover:bg-[#69becb] rounded-full mr-2 cursor-pointer ${
                  i === curretImage ? "bg-[#69becb]" : "bg-white"
                }`}
              ></li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
