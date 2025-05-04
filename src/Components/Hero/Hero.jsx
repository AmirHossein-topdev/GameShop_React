import React from "react";
import FirstSwiper from "../Swiper/FirstSwiper";

function Hero() {
  return (
    <>
      <div className="relative py-10">
        {/* گرادیانت دایره‌ای کوچکتر و محوشده‌تر */}
        <div className="absolute inset-10 bg-[radial-gradient(circle,_#FF66B2_30%,_#FF80E0_70%)] blur-3xl opacity-50 z-0"></div>

        <div className="container mx-auto px-4 text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center relative z-10">
          بزرگترین و معتبرترین مرجع کنسول‌ها و بازی‌های ویدیویی در ایران!!
        </div>

        <p className="text-white font-light px-4 sm:px-6 text-center max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-4 text-sm sm:text-base md:text-lg relative z-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم و برای شرایط فعلی تکنولوژی مورد نیاز می‌باشد.
        </p>

        <div className="mt-10 relative z-10">
          <FirstSwiper />
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <img
          src="/assets/pictures/slider-pic2-1.png"
          alt="..."
          className="size-60 md:size-72 lg:size-80 xl:size-96 mx-auto p-4 rounded-full bg-white"
        />
      </div>
    </>
  );
}

export default Hero;
