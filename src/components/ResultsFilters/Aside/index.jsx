import React, { useContext } from "react";
import funcionAside from "../../../reutilizar/funcionAside";
import ModalContext from "../../../usesContext/ModalContext";

import "./aside.css";

const Aside = ({ showInfo }) => {
  const { showModalMarcas, showModalName, showModalYears, showModalColors } =
    useContext(ModalContext);

  return (
    <aside
      className={
        showInfo
          ? "aside_in_result more_info_Show"
          : "aside_in_result more_info_noShow"
      }
    >
      <div className="list_aside">
        <h2>Año</h2>
        <ul>{funcionAside("Anio")}</ul>
        <button onClick={showModalYears} className="btn_aside">
          View more
        </button>
      </div>
      <div className="list_aside">
        <h2>Marca</h2>
        <ul>{funcionAside("Marca")}</ul>
        <button onClick={showModalMarcas} className="btn_aside">
          View more
        </button>
      </div>
      <div className="list_aside">
        <h2>Puertas</h2>
        <ul>{funcionAside("Puertas")}</ul>
      </div>
      <div className="list_aside">
        <h2>Nombre</h2>
        <ul>{funcionAside("Nombre")}</ul>
        <button onClick={showModalName} className="btn_aside">
          View more
        </button>
      </div>
      <div className="list_aside">
        <h2>Transmision</h2>
        <ul>{funcionAside("Transmision")}</ul>
      </div>
      <div className="list_aside">
        <h2>Color</h2>
        <ul>{funcionAside("Color")}</ul>
        <button onClick={showModalColors} className="btn_aside">
          View more
        </button>
      </div>
      <div className="list_aside">
        <h2>Condicion</h2>
        <ul>{funcionAside("Condicion")}</ul>
      </div>
    </aside>
  );
};

export default Aside;
