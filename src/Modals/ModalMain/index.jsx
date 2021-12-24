import React, { useContext } from "react";
import ModalContext from "../../usesContext/ModalContext";
import car from "../../Images/logginIn/city.jpg";

import "./modal.css";

const ModalMain = () => {
  const { showModal } = useContext(ModalContext);

  return (
    <div className="modal__main_box">
      <div className="modal__main_content">
        <div className="modal__main_info">
          <div className="modal__main_box_img">
            <img src={car} alt="a" />
          </div>
          <div className="modal__main_box_caracte">
            <span className="modal__btn_close">
              <button onClick={showModal}>X</button>
            </span>
            <div className="modal__info_auto">
              <h1 className="mr_bot">Nombre Del Carro</h1>
              <h2 className="mr_bot">$300.000.000</h2>
              <span className="modal__span mr_bot">
                <p>2020</p>
                <p>Usado</p>
              </span>
              <p className="modal__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                culpa explicabo similique nesciunt error, minus perspiciatis
                enim nam temporibus quae quas nisi fugit animi alias ratione
                qui, esse quod assumenda.
              </p>
            </div>
            <div className="modal__info_vendedor">
              <h1 className="mr_bot">Nombre Del Vendedor</h1>
              <h2 className="mr_bot">Ocupación</h2>
              <span className="modal__span_second">
                <p className="mr_bot">(+57) 300 - 500 - 7000 </p>
                <p className="mr_bot">Colombia - Cartagena </p>
                <p className="mr_bot">Miemailes@gmail.com</p>
              </span>
            </div>
            <div className="modal__botons">
              <button className="btn btn__consult">Consultar Auto</button>
              <button className="btn btn__more_info">
                Ver Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMain;
