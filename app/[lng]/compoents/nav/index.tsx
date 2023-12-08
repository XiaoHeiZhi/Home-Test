"use client";

import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";

export default function Nav({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng);

  const [visable, setVisable] = useState(false);

  // 点击切换右上角内容栏
  const changeMeau = () => {
    setVisable(!visable);
  };

  return (
    <>
      <div>
        <nav className="bg-white-800">
          <div className="mx-auto max-w-[1757px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-[60px] items-center justify-between">
              <div className="flex items-center  flex-grow justify-between">
                <div className="flex-shrink-0">
                  <a href={`/${lng}/`}>
                    <img
                      className="h-[32px] w-[95px]"
                      src="https://druid.tech/wp-content/uploads/2020/09/cropped-LOGO_%E7%94%BB%E6%9D%BF-1.png"
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href={`/${lng}/products`}
                      className="text-gray-900  hover:text-[#69becb]  px-3 py-2 text-md font-medium"
                      aria-current="page"
                    >
                      Products
                    </a>
                    <a
                      href={`/${lng}/ecotopia`}
                      className="text-gray-900  hover:text-[#69becb]  px-3 py-2 text-md font-medium"
                    >
                      Ecotopia
                    </a>
                    <a
                      href={`/${lng}/applications`}
                      className="text-gray-900  hover:text-[#69becb] px-3 py-2 text-md font-medium"
                    >
                      Applications
                    </a>
                    <a
                      href={`/${lng}/intelinkgo`}
                      className="text-gray-900  hover:text-[#69becb] px-3 py-2 text-md font-medium"
                    >
                      IntelinkGo
                    </a>
                    <a
                      href={`/${lng}/resources`}
                      className="text-gray-900  hover:text-[#69becb]  px-3 py-2 text-md font-medium"
                    >
                      Resources
                    </a>
                    <a
                      href={`/${lng}/stories`}
                      className="text-gray-900  hover:text-[#69becb]  px-3 py-2 text-md font-medium"
                    >
                      Stories
                    </a>
                    <a
                      href={`/${lng}/druid-in`}
                      className="text-gray-900  hover:text-[#69becb]  px-3 py-2 text-md font-medium"
                    >
                      DRUID IN
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden  md:block w-[250px]">
                <div className=" w-[100px] flex items-center justify-center">
                  <button
                    type="button"
                    className="relative w-[75px] rounded-md bg-[#69becb] p-1 text-white text-md hover:text-sm hover:w-[60px] transtion-all duration-200 ease-in-out"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    LOG IN
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => changeMeau()}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${visable ? "hidden" : "block"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className={`${visable ? "block" : "hidden"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${visable ? "block" : "hidden"} md:hidden`}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href={`/${lng}/products`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                Products
              </a>
              <a
                href={`/${lng}/ecotopia`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                Ecotopia
              </a>
              <a
                href={`/${lng}/applications`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                Applications
              </a>
              <a
                href={`/${lng}/intelinkgo`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                IntelinkGo
              </a>
              <a
                href={`/${lng}/resources`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                Resources
              </a>
              <a
                href={`/${lng}/stories`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                Stories
              </a>
              <a
                href={`/${lng}/druid-in`}
                className="text-gray-900  hover:text-[#69becb] block px-3 py-2 text-sm font-medium"
              >
                DRUID IN
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
