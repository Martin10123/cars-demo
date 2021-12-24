import React, { useMemo } from "react";
import { useParams } from "react-router";
import { getHeroByID } from "../../../Selects/getHeroById";
import InfoAutoAside from "../InfoAutoAside";
import Tabs from "../Tabs";

import "./table.css";

const Table = () => {
  const { name } = useParams();
  const car = useMemo(() => getHeroByID(name), [name]);

  return (
    <>
      <div className="contain_everything_info">
        <div className="contain_table_and_tabs">
          <div className="table__box">
            <h1>Información general del vehiculo</h1>
            <div className="table__box_content">
              {car.Tipo !== "Moto" ? (
                <div className="table__contain_info">
                  <div className="table__info_items">Tipo</div>
                  <div className="table__info_items">Nombre</div>
                  <div className="table__info_items">Marca</div>
                  <div className="table__info_items">Precio</div>
                  <div className="table__info_items">Ubicacion</div>
                  <div className="table__info_items">Color</div>
                  <div className="table__info_items">Anio</div>
                  <div className="table__info_items"># Puertas</div>
                </div>
              ) : (
                <div className="table__contain_info">
                  <div className="table__info_items">Tipo</div>
                  <div className="table__info_items">Nombre</div>
                  <div className="table__info_items">Precio</div>
                  <div className="table__info_items">Ubicacion</div>
                  <div className="table__info_items">Color</div>
                  <div className="table__info_items">Anio</div>
                </div>
              )}

              {car.Tipo === "Moto" ? (
                <div className="table__contain_info_description">
                  <div className="table__description_items">{car.Tipo}</div>
                  <div className="table__description_items">{car.Nombre}</div>
                  <div className="table__description_items">{car.Precio}</div>
                  <div className="table__description_items">{car.Ubicacion}</div>
                  <div className="table__description_items">{car.Color}</div>
                  <div className="table__description_items">{car.Anio}</div>
                </div>
              ) : (
                <div className="table__contain_info_description">
                  <div className="table__description_items">{car.Tipo}</div>
                  <div className="table__description_items">{car.Nombre}</div>
                  <div className="table__description_items">{car.Marca}</div>
                  <div className="table__description_items">{car.Precio}</div>
                  <div className="table__description_items">{car.Ubicacion}</div>
                  <div className="table__description_items">{car.Color}</div>
                  <div className="table__description_items">{car.Anio}</div>
                  <div className="table__description_items">{car.Puertas}</div>
                </div>
              )}
            </div>
          </div>
          <Tabs />
        </div>
        <InfoAutoAside />
      </div>
    </>
  );
};

export default Table;
