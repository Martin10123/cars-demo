import React from "react";
import Slider from "infinite-react-carousel";

import "./cardMain.css";
import { Link } from "react-router-dom";

const CardMain = ({ img }) => {
  return (
    <div className="image-tres_contain_info">
      <Slider>
        <div className="box_slider_content1">
          <Link to={`/cardSelect/${img.Nombre}`}>
            <img src={img.Img} alt="" />
          </Link>
        </div>
      </Slider>
      <div className="imagen-tres_contain_letra">
        <h1>{img.Nombre}</h1>
        <hr />
        <div className="price">
          <p>$ {img.Precio}</p>
          <p>{img.Anio}</p>
        </div>
        <p>{img.Description}</p>
      </div>
    </div>
  );
};

export default CardMain;
