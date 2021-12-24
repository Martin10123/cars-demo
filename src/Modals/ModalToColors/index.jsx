import React, { useContext } from "react";
import ModalContext from "../../usesContext/ModalContext";
import "./modalToColors.css";

const colors = [
  "Abbey",
  "Absolute Zero",
  "Acadia",
  "Acapulco",
  "Acid Green",
  "Aero",
  "Aero Blue",
  "Affair",
  "African Violet",
  "Air Force Blue",
  "Air Superiority Blue",
  "Akaroa",
  "Alabama Crimson",
  "Alabaster",
  "Albescent White",
  "Algae Green",
  "Alice Blue",
  "Alien Armpit",
  "Alizarin Crimson",
];

const ModalToColors = () => {
  const { showModalColors } = useContext(ModalContext);

  return (
    <div className="modal_colors__box">
      <div className="modal_colors__content">
        <div className="modal_colors__contain_info">
          <button onClick={showModalColors} className="btn_close_modal_aside">
            X
          </button>
          <div className="modal_colors__title">
            <h1>Colores</h1>
          </div>
          <div className="modal_colors__all_colors">
            <ul>
              {colors.map((color, i) => (
                <li key={i}>
                  {i + 1}. {color} (1)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToColors;
