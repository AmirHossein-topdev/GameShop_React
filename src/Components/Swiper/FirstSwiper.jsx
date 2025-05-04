import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const slideData = [
  {
    title: "خرید کنسول",
    image: "/assets/pictures/p-cat-3.png",
    link: "/",
  },
  {
    title: "خرید بازی",
    image: "/assets/pictures/p-cat-2.png",
    link: "/",
  },
  {
    title: "اکشن فیگور",
    image: "/assets/pictures/p-cat-1.png",
    link: "/",
  },
  {
    title: "خرید دسته",
    image: "/assets/pictures/p-cat-4.png",
    link: "/",
  },
];

export default function App() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      initialSlide={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper "
      style={{ backgroundColor: "transparent" }}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className=" overflow-hidden flex flex-col items-center justify-between p-4 h-60 rounded-3xl text-white  backdrop-blur-xl shadow-lg transition-all hover:scale-y-95 duration-300 border border-white/20 ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-24 h-24 object-contain mb-2 rounded-full overflow-hidden"
            />
            <span className="font-bold text-xl">{slide.title}</span>
            <NavLink to={slide.link} className="mt-3">
              <button className="bg-white text-black font-bold text-sm px-3 py-2 rounded-xl hover:bg-gray-200 transition-all duration-200">
                {"مشاهده جزئیات >"}
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
