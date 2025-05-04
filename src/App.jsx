import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ProductSwiper1 from "./Components/Swiper/ProductsSwiper1";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-white font-extrabold font-[Vazir] text-2xl ms-3 my-5 text-center">
        محصولات تخفیفی
        <span className="block mt-2 w-full h-1 bg-purple-600 "></span>
      </h2>

      <ProductSwiper1 />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
