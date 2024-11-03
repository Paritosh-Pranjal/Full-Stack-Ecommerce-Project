import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./mainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer -z-10"
      onClick={() => {}}
      src={item.image}
      alt="carousel item"
      role="presentation"
    />
  ));
  

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
