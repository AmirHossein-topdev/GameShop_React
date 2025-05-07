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
        <div className="bg-white rounded-xl size-20 content-center items-center text-red-600 text-lg font-bold">
          {String(seconds).padStart(2, "0")}
          <br />
          <span className="m-1">ثانیه</span>
        </div>
        <div className="bg-white rounded-xl size-20 content-center items-center text-red-600 text-lg font-bold">
          {String(minutes).padStart(2, "0")}
          <br />
          <span className="m-1">دقیقه</span>
        </div>
        <div className="bg-white rounded-xl size-20 content-center items-center text-red-600 text-lg font-bold">
          {String(hours).padStart(2, "0")}
          <br />
          <span className="m-1">ساعت</span>
        </div>
      </div>
    );
  }
};

function Offbox() {
  return (
    <div className="container bg-slate-700 rounded-2xl p-3 mx-auto w-[90%] mt-10">
      <h3 className="text-2xl text-white font-[900] font-[Vazir] p-1 text-center">
        تخفیفات ویژه رو از دست نده !!
      </h3>
      <p className="text-white/70 mt-2 text-sm text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <br />
      <Countdown date={Date.now() + 10 * 60 * 60 * 1000} renderer={renderer} />
      <br />
      <ProductSwiper2 />
    </div>
  );
}

export default Offbox;
