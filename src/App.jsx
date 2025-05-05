import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ProductSwiper1 from "./Components/Swiper/ProductsSwiper1";
import ProductSwiper3 from "./Components/Swiper/ProductsSwiper3";
import Blog from "./Components/Swiper/Blog";
import Banner1 from "./Components/Banner/Banner1";
import Banner2 from "./Components/Banner/Banner2";
import Banner3 from "./Components/Banner/Banner3";
import Offbox from "./Components/OffBox/Offbox";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <ProductSwiper1 />
      <Banner1 />
      <Offbox />
      <Banner2 />
      <ProductSwiper3 />
      <Banner3 />
      <Blog />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
