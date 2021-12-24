import React, { useContext } from "react";
import cars from "../../Data";
import ModalContext from "../../usesContext/ModalContext";

import "../ModalToColors/modalToColors.css";

const ModalToName = () => {
  const { showModalName } = useContext(ModalContext);

  return (
    <div className="modal_colors__box">
      <div className="modal_colors__content">
        <div className="modal_colors__contain_info">
          <button onClick={showModalName} className="btn_close_modal_aside">
            X
          </button>
          <div className="modal_colors__title">
            <h1>Nombres</h1>
          </div>
          <div className="modal_colors__all_colors">
            <ul>
              {cars.map((name, i) => (
                <li key={i}>
                  {i + 1}. {name.Nombre} (1)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToName;
