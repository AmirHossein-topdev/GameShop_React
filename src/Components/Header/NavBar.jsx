import React, { useState, useEffect, useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { RiSearch2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [score, setScore] = useState(0);

  const menuRef = useRef(null); // مرجع به منو

  useEffect(() => {
    // گرفتن امتیاز از localStorage
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(storedScore);
    }

    // تابع برای بستن منو زمانی که کلیک خارج از آن می‌شود
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false); // بستن منو اگر کلیک خارج از آن باشد
      }
    };

    // افزودن event listener به document
    document.addEventListener("mousedown", handleClickOutside);

    // پاک کردن event listener هنگام unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* دکمه باز کردن منو */}
      <nav className="container sm:hidden cursor-pointer">
        <FaBarsStaggered
          className="text-2xl text-gray-700"
          onClick={() => setMenu(true)} // باز کردن منو
          aria-label="باز کردن منو"
        />
      </nav>

      {/* منو موبایل */}
      {menu && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenu(false)}
        ></div>
      )}
      <div
        ref={menuRef} // اعمال مرجع به منو
        className={`fixed top-0 h-full w-3/5 bg-white rounded-e-md z-50 shadow-xl
        transition-transform duration-700 ease-in-out
        ${menu ? "right-[0%]" : "translate-x-[100vw]"}
        backdrop-blur-3xl`} // اضافه کردن blur پس زمینه
      >
        {/* هدر منو */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2 mx-auto">
            <img
              className="w-12 h-12 object-contain"
              src="/assets/pictures/header-logo.png"
              alt="لوگو"
            />
            <span className="text-center font-bold text-sm leading-tight">
              فروشگاه کنسول <br /> و بازی
            </span>
          </div>
          <IoCloseCircle
            className="text-red-800 text-3xl cursor-pointer"
            onClick={() => setMenu(false)} // بستن منو با کلیک روی دکمه بستن
            aria-label="بستن منو"
          />
        </div>

        {/* سرچ */}
        <div className="flex mt-6 bg-gray-200 w-5/6 rounded-md mx-auto p-2">
          <input
            className="outline-none bg-transparent w-3/4"
            placeholder="جستجو کنید..."
          />
          <div className="w-1/4 flex justify-center items-center">
            <RiSearch2Fill className="text-blue-700 text-2xl" />
          </div>
        </div>

        {/* لینک‌ها */}
        <div className="mt-6 flex flex-col gap-2">
          {[
            { to: "/", label: "صفحه اصلی" },
            { to: "/shop", label: "فروشگاه" },
            { to: "/article", label: "مقالات" },
            { to: "/contact-us", label: "تماس باما" },
            { to: "/about-us", label: "درباره ما" },
            { to: "/game-order", label: "سفارش بازی" },
            { to: "/---", label: `امتیاز شما: ${score}` }, // نمایش امتیاز
          ].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className={({ isActive }) =>
                `w-5/6 mx-auto p-3 rounded-md text-sm font-[Vazir] font-semibold ${
                  isActive
                    ? "bg-blue-400 text-white"
                    : "bg-white outline-dashed outline-1"
                }`
              }
              onClick={() => setMenu(false)} // برای بسته شدن منو هنگام کلیک
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
