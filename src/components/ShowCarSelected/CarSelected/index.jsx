import React, { useContext, useMemo } from "react";
import ModalContext from "../../../usesContext/ModalContext";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";

import { getHeroByID } from "../../../Selects/getHeroById";
import Table from "../Table";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cardSelect.css";
import ModalQuestionAuto from "../../../Modals/ModalConsultAuto";

const CardSelect = () => {
  const { modalConsultAuto, showModalConsultAuto } = useContext(ModalContext);

  const { name } = useParams();
  const car = useMemo(() => getHeroByID(name), [name]);

  return (
    <>
      <div className="card_select__box">
        <div className="card_select__box_content">
          <div className="card_select__contain_info">
            <Carousel>
              <div className="card_select__box_img">
                <img src={car.Img} alt="" />
              </div>
            </Carousel>
            <div className="card_select_info_auto">
              <h1>{car.Nombre}</h1>
              <h2>{car.Precio}</h2>
              <p className="card_select__description">{car.Description}</p>
              <div className="card_select__btn">
                <button onClick={showModalConsultAuto}>Consultar Auto</button>
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
      {modalConsultAuto && <ModalQuestionAuto />}
    </>
  );
};

export default CardSelect;
