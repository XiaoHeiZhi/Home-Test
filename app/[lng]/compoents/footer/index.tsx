"use client";
import BackImage from "@/public/Image/page_end.png";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Footer({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const [navHidden, setNavHidden] = useState(false);

  const [seriesHidden, setSeriesHidden] = useState(false);

  const [productHidden, setProductHidden] = useState(false);

  const seriesList = [
    {
      text: "DEBUT Series",
      path: "",
    },
    {
      text: "DEBUT FLEX II",
      path: "debut-flex-ii",
    },
    {
      text: "DEBUT FLEX",
      path: "debut-flex",
    },
    {
      text: "DEBUT LEGO",
      path: "debut-lego",
    },
    {
      text: "DEBUT MINI",
      path: "debut-mini",
    },
    {
      text: "DEBUT NANO",
      path: "debut-nano",
    },
    {
      text: "DEBUT BADGE",
      path: "debut-badge",
    },
    {
      text: "DEBUT BLOCK",
      path: "debut-block",
    },
    {
      text: "DEBUT RING",
      path: "debut-ring",
    },
  ];

  const navList = [
    {
      text: "Products",
      path: "products",
    },
    {
      text: "Ecotopia",
      path: "ecotopia",
    },
    {
      text: "Applications",
      path: "applications",
    },
    {
      text: "IntelinkGo",
      path: "intelinkGo",
    },
    {
      text: "Resources",
      path: "resources",
    },
    {
      text: "Stories",
      path: "stories",
    },
    {
      text: "DRUID IN",
      path: "druid-in",
    },
  ];

  const productsList = [
    {
      text: "Interrex Series",
      path: "interrex-series",
    },
    {
      text: "Customized Solutions",
      path: "customized-solutions",
    },
    {
      text: "Gateways",
      path: "gateways",
    },
    {
      text: "OEM Developer",
      path: "oem-developer",
    },
    {
      text: "Accessories",
      path: "accessories",
    },
  ];

  // 设置动画
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <footer
      style={{
        backgroundImage: `url(${BackImage.src})`,
      }}
      className=" bg-no-repeat bg-cover"
    >
      <div className="container px-5 py-10 mx-auto md:flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  hidden">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3  w-full px-4 text-left ml-28 md:ml-0 md:pl-20">
            <nav className="list-none">
              {navList.map((item, i) => {
                return (
                  <li className="mb-[22px]" key={i}>
                    <a
                      className="text-[#d9d9d9] hover:text-[#ffffff] font-[Poppins]"
                      href={`/${lng}/${item.path}`}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-1/3  w-full px-4 text-left ml-28 md:ml-0 md:pl-20">
            <nav className="list-none">
              {seriesList.map((item, i) => {
                return (
                  <a
                    href={`/${lng}/products/debut-series/${item.path}/`}
                    className="text-[#d9d9d9] hover:text-[#ffffff] font-[Poppins]"
                    key={i}
                  >
                    <li className="mb-[22px]">{item.text}</li>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="lg:w-1/3  w-full px-4 text-left ml-28 md:ml-0 md:pl-20">
            <nav className="list-none">
              {productsList.map((item, i) => {
                return (
                  <li className="mb-[22px]" key={i}>
                    <a
                      className="text-[#d9d9d9] hover:text-[#ffffff] font-[Poppins]"
                      href={`/${lng}/products/${item.path}`}
                    >
                      <div style={{ verticalAlign: "inherit" }}>
                        <div style={{ verticalAlign: "inherit" }}>
                          {item.text}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:hidden text-[#dbdada]">
        <div className="border-b-2 mx-2 py-2 border-b-[#dbdada] cursor-pointer">
          <div
            className="w-full flex justify-between"
            onClick={() => setNavHidden(!navHidden)}
          >
            <span className=" font-[Poppins]">NAV</span>
            <button>{navHidden ? "+" : "-"}</button>
          </div>
          <animated.ul
            className={`${navHidden ? "hidden" : ""} pl-6`}
            style={{ ...springs }}
          >
            {navList.map((item, i) => {
              return (
                <li key={i} className="w-full">
                  <a className=" font-[Poppins]" href={`/${lng}/${item.path}`}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </animated.ul>
        </div>
        <div className="border-b-2 mx-2 py-2 border-b-[#dbdada] cursor-pointer">
          <div
            className="w-full flex justify-between"
            onClick={() => setSeriesHidden(!seriesHidden)}
          >
            <span className=" font-[Poppins]">DEBUT Series</span>
            <button>{seriesHidden ? "+" : "-"}</button>
          </div>
          <animated.ul
            className={`${seriesHidden ? "hidden" : ""} pl-6`}
            style={{ ...springs }}
          >
            {seriesList.map((item, i) => {
              return (
                <li key={i} className="w-full">
                  <a className=" font-[Poppins]" href={`/${lng}/${item.path}`}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </animated.ul>
        </div>{" "}
        <div className="border-b-2 mx-2 py-2 border-b-[#dbdada] cursor-pointer">
          <div
            className="w-full flex justify-between"
            onClick={() => setProductHidden(!productHidden)}
          >
            <span className=" font-[Poppins]">Others</span>
            <button>{productHidden ? "+" : "-"}</button>
          </div>
          <animated.ul
            className={`${productHidden ? "hidden" : ""} pl-6`}
            style={{ ...springs }}
          >
            {productsList.map((item, i) => {
              return (
                <li key={i} className="w-full">
                  <a className=" font-[Poppins]" href={`/${lng}/${item.path}`}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </animated.ul>
        </div>
      </div>
      <div className="container  mx-auto px-10">
        <div className="container mx-auto border-t-2 border-[#FFFFFF75] py-4 px-5 ">
          <div className="text-[#d9d9d9]  hover:text-[#ffffff] mb-[23px]">
            Druid Technology Co., Ltd.
          </div>
          <div className="text-[#d9d9d9] text-sm text-left mb-[17px] flex ">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect opacity="0.01" width="22" height="22" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.99756 8.37347C3.99756 4.50535 7.13375 1.36914 11.0019 1.36914C14.87 1.36914 18.0062 4.50535 18.0062 8.37347C18.0062 14.0645 11.0019 20.631 11.0019 20.631C11.0019 20.631 3.99756 14.0645 3.99756 8.37347ZM7.49971 8.37347C7.49971 10.3075 9.06695 11.8756 11.0019 11.8756C12.9359 11.8756 14.504 10.3075 14.504 8.37347C14.504 6.43941 12.9359 4.87129 11.0019 4.87129C9.06695 4.87129 7.49971 6.43941 7.49971 8.37347Z"
                fill="white"
              />
            </svg>
            2F, Yongjiale Building, Xiaweiyuanxincun, Bao'an District,Shenzhen,
            China
          </div>
          <div className="text-[#d9d9d9] text-sm text-left mb-[20px] flex">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect opacity="0.01" width="22" height="22" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.99756 8.37347C3.99756 4.50535 7.13375 1.36914 11.0019 1.36914C14.87 1.36914 18.0062 4.50535 18.0062 8.37347C18.0062 14.0645 11.0019 20.631 11.0019 20.631C11.0019 20.631 3.99756 14.0645 3.99756 8.37347ZM7.49971 8.37347C7.49971 10.3075 9.06695 11.8756 11.0019 11.8756C12.9359 11.8756 14.504 10.3075 14.504 8.37347C14.504 6.43941 12.9359 4.87129 11.0019 4.87129C9.06695 4.87129 7.49971 6.43941 7.49971 8.37347Z"
                fill="white"
              />
            </svg>
            5th Floor, Area B, No. 199, 3rd Tianfu Street, Hi-Tech
            District,Chengdu, China
          </div>
          <div className="text-[#8c8c8c] text-sm text-left mb-[20px] flex">
            © 2022 Druid Technology Co., Ltd. All Rights Reserved.  Privacy
            Policy  |  Terms of Used
          </div>
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 w-full justify-end">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
