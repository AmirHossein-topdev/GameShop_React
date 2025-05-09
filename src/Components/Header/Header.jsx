import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import NavBar from "./NavBar";

function Header() {
  const [menu, setmenu] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // گرفتن امتیاز از  localStorage
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(storedScore);
    }
  }, []);
  return (
    <>
      <header>
        <div className="container rounded-md flex w-[90%] mx-auto my-5  bg-white md:p-1">
          <div className="w-1/4 my-auto p-3 md:hidden">
            <NavBar />
          </div>
          <div className="order-1 md:order-2 md:flex md:flex-wrap md:justify-start md:items-center w-full md:w-3/4 my-auto hidden md:gap-x-6">
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
                  `text-sm font-[Vazir] font-semibold whitespace-nowrap ${
                    isActive ? "text-blue-600" : "text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="order-2 md:order-1 w-2/4 flex m-auto">
            <img
              src="/assets/pictures/header-logo.png"
              alt="logo"
              className="size-12 p-1"
            />
            <span className="text-[13px] align-middle my-auto font-bold text-center">
              {" "}
              فروشگاه کنسول و بازی
            </span>
          </div>
          <div className="order-3 w-1/4 flex justify-center p-3 gap-2">
            <div className="">
              <NavLink to="/" className="">
                <FaUser className="bg-blue-300 hover:bg-blue-500 transition-colors duration-200  size-8 p-2 rounded-md" />
              </NavLink>
            </div>
            <div className="">
              <NavLink to="/" className="">
                <FaBasketShopping className="bg-purple-300 hover:bg-purple-500 transition-colors duration-200 size-8 p-2 rounded-md" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
