import React from "react";
import { NavLink } from "react-router-dom";

function Banner1() {
  return (
    <>
      <div className="container md:flex justify-between gap-16 md:w-[90vw] mx-auto">
        <div className="md:flex bg-gradient-to-t from-blue-800 to-blue-400 mt-20 h-60 w-[90%] mx-auto rounded-xl text-center text-white relative">
          <div className="md:hidden">
            <img
              src="/assets/pictures/banner-pic1.png"
              alt="..."
              className="size-40 absolute -top-14 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/assets/pictures/banner-pic1.png"
              alt="..."
              className="size-72 -mt-8 pb-4"
            />
          </div>
          <div className="h-28 md:hidden"></div>
          <div className="my-auto">
            <h4 className="text-white font-bold text-xl">
              مسابقات بازی هر هفته انجام می‌شود!!
            </h4>
            <p className="text-gray-300 font-thin mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <div className="h-4"></div>
            <NavLink to="/" className="">
              <button className="bg-white text-black rounded-md p-2 font-[Vazir] text-sm">
                اطلاعات بیشتر
              </button>
            </NavLink>
          </div>
        </div>
        <div className="md:flex bg-gradient-to-t from-purple-800 to-purple-400 mt-20 h-60 w-[90%] mx-auto rounded-xl text-center text-white relative">
          <div className="md:hidden">
            <img
              src="/assets/pictures/banner-pic3.png"
              alt="..."
              className="size-40 absolute -top-14 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/assets/pictures/banner-pic3.png"
              alt="..."
              className="size-72 -mt-8 pb-4"
            />
          </div>
          <div className="h-28 md:hidden"></div>
          <div className="my-auto">
            <h4 className="text-white font-bold text-xl">
              مسابقات بازی هر هفته انجام می‌شود!!
            </h4>
            <p className="text-gray-300 font-thin mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <div className="h-4"></div>
            <NavLink to="/" className="">
              <button className="bg-white text-black rounded-md p-2 font-[Vazir] text-sm">
                اطلاعات بیشتر
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner1;
