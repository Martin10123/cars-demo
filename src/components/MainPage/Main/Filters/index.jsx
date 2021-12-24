import React, { useContext } from "react";
import { useHistory } from "react-router";
import {
  carOptionsPrice,
  createCarOptions,
} from "../../../../reutilizar/funcionSelect";
import { ChangeContext } from "../../../../usesContext/ChangeContext";

import "./filters.css";

const Filters = () => {
  const {
    initialState,
    nameCar,
    year,
    type,
    currentType,
    door,
    color,
    currentName,
    currentYear,
    currentDoor,
    currentColor,
  } = useContext(ChangeContext);

  const history = useHistory();

  const handleSubmitInfo = () => {
    history.replace("/resultsFiltros");
  };

  return (
    <div className="container_select">
      <div className="box_inside_select">
        <select value={type} onChange={currentType}>
          {createCarOptions("Tipo")}
        </select>
        <select value={nameCar} onChange={currentName}>
          <option value={initialState.Nombre}>{initialState.Nombre}</option>
          {createCarOptions("Nombre")}
        </select>
        <select>
          <option value={initialState.Precio}>{initialState.Precio}</option>
          {carOptionsPrice("Precio")}
        </select>
        <select>
          <option>Cualquier Marca</option>
          {createCarOptions("Marca")}
        </select>
        <select value={color} onChange={currentColor}>
          <option value={initialState.Color}>{initialState.Color}</option>
          {createCarOptions("Color")}
        </select>
        <select value={year} onChange={currentYear}>
          <option value={initialState.Anio}>{initialState.Anio}</option>
          {createCarOptions("Anio")}
        </select>
        <select value={door} onChange={currentDoor}>
          <option value={initialState.Puertas}>{initialState.Puertas}</option>;
          {createCarOptions("Puertas")}
        </select>
        <select>
          <option>Condicion del auto</option>
          {createCarOptions("Condicion")}
        </select>
        <button onClick={handleSubmitInfo} className="btn_main">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Filters;
