"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useEffect, useRef } from "react";
import { IoStar } from "react-icons/io5";

const slidersData = [
  {
    title:
      "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
    description: "colinandmandy94",
  },
  {
    title:
      "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.",
    description: "Jennifer Black",
  },
  {
    title:
      "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
    description: "Phillip Colligan",
  },
  {
    title:
      "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
    description: "colinandmandy94",
  },
  {
    title:
      "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
    description: "Phillip Colligan",
  },
];

export default function Slider() {
  const swiperWrappedRef = useRef<HTMLDivElement | null>(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;
    const wrapper = swiperWrappedRef.current;

    if (wrapper instanceof HTMLDivElement) {
      wrapper.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <main className="flex items-center justify-center overflow-hidden h-[500px] py-10">
      <Swiper
        modules={[Pagination]}
        grabCursor
        initialSlide={2}
        slidesPerView={"auto"}
        speed={800}
        slideToClickedSlide
        pagination={{ clickable: true }}
        breakpoints={{
          320: { spaceBetween: 40 },
          650: { spaceBetween: 40 },
          1000: { spaceBetween: 30 },
        }}
        onSwiper={(swiper) => {
          swiperWrappedRef.current = swiper.wrapperEl as HTMLDivElement;
        }}
      >
        {slidersData.map((slide, index) => (
          <SwiperSlide key={index} className="bg-white">
            <ul className="flex gap-x-0.5 text-[#FFC247]">
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
            <div>
              <h1>{slide.title}</h1>
            </div>
            <div>
              <div>
                <p className="font-bold">{slide.description}</p>
              </div>
              <div>
                <button>
                  <span>More...</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
