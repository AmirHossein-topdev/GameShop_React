import React from "react";
import ProductSwiper2 from "../Swiper/ProductsSwiper2";
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex gap-3 justify-center text-center">
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-black">
          00
        </div>
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-black">
          00
        </div>
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-black">
          00
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 justify-center text-center">
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-red-600 text-lg font-bold">
          {String(seconds).padStart(2, "0")}
        </div>
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-red-600 text-lg font-bold">
          {String(minutes).padStart(2, "0")}
        </div>
        <div className="bg-white rounded-xl size-20 content-center flex items-center justify-center text-red-600 text-lg font-bold">
          {String(hours).padStart(2, "0")}
        </div>
      </div>
    );
  }
};

function Offbox() {
  return (
    <div className="container bg-white/40 rounded-md p-2 mx-auto w-[90%] mt-10">
      <h3 className="text-2xl text-white font-[900] font-[Vazir]">
        تخفیفات ویژه رو از دست نده !!
      </h3>
      <p className="text-white/70 mt-2 text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <br />
      <Countdown date={Date.now() + 2 * 60 * 60 * 1000} renderer={renderer} />
      <br />
      <ProductSwiper2 />
    </div>
  );
}

export default Offbox;
