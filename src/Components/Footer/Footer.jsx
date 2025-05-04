import React from "react";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-10 border-t border-gray-300 py-8 text-sm font-[Vazir] rounded-t-3xl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* لوگو و توضیح */}
        <div className="md:w-1/3 ">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img
              src="/assets/pictures/header-logo.png"
              alt="لوگو"
              className="size-10"
            />
            <span className="font-bold text-sm">فروشگاه کنسول و بازی</span>
          </div>
          <p className="text-gray-600 text-xs leading-6">
            ارائه‌دهنده جدیدترین بازی‌ها و کنسول‌های روز دنیا با پشتیبانی و
            مشاوره تخصصی.
          </p>
        </div>
        <hr className="border border-blue-900 w-full rounded-3xl" />
        {/* لینک‌ها */}
        <div className="md:w-1/3 flex flex-col gap-2 text-center">
          <h4 className="font-bold text-black">لینک‌های مفید</h4>
          {[
            { to: "/", label: "صفحه اصلی" },
            { to: "/shop", label: "فروشگاه" },
            { to: "/article", label: "مقالات" },
            { to: "/contact-us", label: "تماس با ما" },
            { to: "/about-us", label: "درباره ما" },
            { to: "/game-order", label: "سفارش بازی" },
          ].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <hr className="border border-purple-900 w-full rounded-3xl" />

        {/* شبکه‌های اجتماعی */}
        <div className="md:w-1/3">
          <h4 className="font-semibold mb-2">ما را دنبال کنید</h4>
          <div className="flex gap-4 text-xl text-gray-600">
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است | فروشگاه کنسول و بازی
      </div>
    </footer>
  );
}

export default Footer;
