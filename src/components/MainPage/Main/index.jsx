import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import cars from "../../../Data";
import RunCardMain from "./CardMain/RunCardMain";
import Filters from "./Filters";

import "./main.css";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const length = cars.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(cars) || cars.length <= 0) {
    return null;
  }

  return (
    <div className="contain_both_slider">
      <section className="slider_filter">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {cars.map((slide, index) => {
          return (
            <div
              className={
                index === current ? "slide_filter active" : "slide_filter"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={slide.Img}
                  alt="travel ewimage"
                  className="image_filter"
                />
              )}
            </div>
          );
        })}
      </section>
      <Filters />
      <RunCardMain />
    </div>
  );
};

export default Main;
