import React from "react";
import face from "../../../Images/svgs/facebook.svg";
import phone from "../../../Images/svgs/phone.svg";
import email from "../../../Images/svgs/email.svg";

import "./infoAutoAside.css";

const InfoAutoAside = () => {
  return (
    <div className="aside_auto__box">
      <div className="aside_auto__box_content">
        <div className="aside_auto__section section1">
          <h2>Martin Simarra</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            error culpa placeat eos soluta natus repudiandae.
          </p>
          <ul>
            <span>
              <img src={face} alt="" />
              <li>martinsimarra4@gmail.com</li>
            </span>
            <span>
              <img src={phone} alt="" />
              <li>+57 (300)-683-0624 </li>
            </span>
            <span>
              <img src={email} alt="" />
              <li>martinsimarra4@hotmail.com</li>
            </span>
          </ul>
        </div>
        <div className="aside_auto__section section2">
          <h2>Consejos de seguridad</h2>
          <ul>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              optio magni cumque repellendus, sed doloribus.
            </li>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              optio magni cumque repellendus, sed doloribus.
            </li>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              optio magni cumque repellendus, sed doloribus.
            </li>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              optio magni cumque repellendus, sed doloribus.
            </li>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              optio magni cumque repellendus, sed doloribus.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoAutoAside;
