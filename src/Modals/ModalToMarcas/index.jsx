import React, { useContext } from "react";
import cars from "../../Data";
import ModalContext from "../../usesContext/ModalContext";

import "../ModalToColors/modalToColors.css";

const ModalToMarcas = () => {
  const { showModalMarcas } = useContext(ModalContext);

  return (
    <div className="modal_colors__box">
      <div className="modal_colors__content">
        <div className="modal_colors__contain_info">
          <button onClick={showModalMarcas} className="btn_close_modal_aside">
            X
          </button>
          <div className="modal_colors__title">
            <h1>Marcas</h1>
          </div>
          <div className="modal_colors__all_colors">
            <ul>
              {cars.map((marcas, i) => (
                <li key={i}>
                  {i + 1}. {marcas.Marca} (1)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToMarcas;
