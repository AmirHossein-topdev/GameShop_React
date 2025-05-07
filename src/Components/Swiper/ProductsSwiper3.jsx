import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const slideData = [
  {
    title: "کنسول سفید Xbox سری S",
    image: "/assets/pictures/product-pic2-300x300.png",
    link: "/",
    price: "۶,۹۰۰,۰۰۰",
    discountPrice: "۶,۰۰۰,۰۰۰",
    discountPercent: "۱۳٪",
  },
  {
    title: "اکشن فیگور نینجا ترتلز",
    image: "/assets/pictures/product-pic4.png",
    link: "/",
    price: "۲,۵۰۰,۰۰۰",
    discountPrice: "۲,۲۰۰,۰۰۰",
    discountPercent: "۱۲٪",
  },
  {
    title: "فیگور مدل Funco Pop Twi Halk Spiderman",
    image: "/assets/pictures/product-pic6.png",
    link: "/",
    price: "۳۴۰,۰۰۰",
    discountPrice: "۳۰۰,۰۰۰",
    discountPercent: "۱۲٪",
  },
  {
    title: "کنسول بازی ps4",
    image: "/assets/pictures/product-pic9-300x300.png",
    link: "/",
    price: "۱۰,۰۰۰,۰۰۰",
    discountPrice: "۹,۰۰۰,۰۰۰",
    discountPercent: "۱۰٪",
  },
  {
    title: "اکشن فیگور ساکروی مدل رونالدو",
    image: "/assets/pictures/product-pic10.png",
    link: "/",
    price: "۳۵۰,۰۰۰",
    discountPrice: "۳۲۰,۰۰۰",
    discountPercent: "۱۰٪",
  },
];

export default function App() {
  return (
    <>
      <h2 className="text-white font-extrabold font-[Vazir] text-2xl  my-5 text-center w-[90%] mx-auto">
        محصولات پرفروش فروشگاه!
        <span className="block mt-2 w-full h-1 bg-blue-600 rounded-full"></span>
      </h2>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20} // اضافه کردن فاصله بین اسلایدها
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 }, // موبایل
          640: { slidesPerView: 2 }, // تبلت کوچک
          1024: { slidesPerView: 3 }, // دسکتاپ
          1280: { slidesPerView: 4 }, // نمایشگرهای خیلی بزرگ
        }}
        className="mySwiper px-4 w-[90%] mx-auto"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col items-center justify-between p-4 h-80 md:h-96 lg:h-[26rem] mx-auto rounded-2xl bg-white shadow-lg border border-white/20 transition-all duration-300 hover:scale-[0.98]">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                {slide.discountPercent} تخفیف
              </div>

              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="size-40 md:size-56 object-contain"
              />

              {/* Title */}
              <span className="font-bold text-black text-xs md:text-sm lg:text-base bg-purple-600 w-full text-center rounded-lg py-1 shadow-lg">
                {slide.title}
              </span>

              {/* Price Box */}
              <NavLink
                to={slide.link}
                className="flex items-center justify-between p-2 bg-white rounded-xl shadow-md w-full mt-2"
              >
                <div className="w-2/3 text-right text-purple-800 font-semibold text-xs md:text-sm lg:text-base">
                  <span className="line-through text-gray-500 block">
                    {slide.price} تومان
                  </span>
                  <span className="text-sm md:text-base">
                    {slide.discountPrice} تومان
                  </span>
                </div>
                <div className="w-1/3 flex justify-end me-2">
                  <FaCartShopping className="text-blue-700 text-lg md:text-xl" />
                </div>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
