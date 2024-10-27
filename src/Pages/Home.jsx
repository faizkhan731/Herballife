import React from "react";
import Trand from "../components/trand/Trand";
import Item from "../components/item/Item";
import Combopack from "../components/combo/Combopack";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Slider from "../slider/Slider";
export const Home = () => {
  return (
    <>
      <Nav />
      <Slider />
      <Trand />
      <Item />
      <Combopack />
      <hr />
      <Footer />
    </>
  );
};
