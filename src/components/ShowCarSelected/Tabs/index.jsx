import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import { getHeroByID } from "../../../Selects/getHeroById";

import "./tabs.css";

const Tabs = () => {
  const { name } = useParams();
  const car = useMemo(() => getHeroByID(name), [name]);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs_sizes">
      <div className="box_of_tabs">
        <div className="mini_box_tabs">
          <div className="container_tabs_simple">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Información general del auto
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Rendimiento del auto
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Seguridad del auto
              </button>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <h2>{car.Nombre}</h2>
                <hr />
                <ul>
                  <li className="li_tabs">Puertas: {car.Puertas}</li>
                  <li className="li_tabs">
                    Descripción General: {car.Description}
                  </li>
                  <li className="li_tabs">Color: {car.Color}</li>
                </ul>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <h2>{car.Nombre}</h2>
                <hr />
                <ul>
                  <li className="li_tabs">Marca: {car.Marca}</li>
                  <li className="li_tabs">Condición: {car.Condicion}</li>
                  <li className="li_tabs">Transmision: {car.Transmision}</li>
                </ul>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <h2>{car.Nombre}</h2>
                <hr />
                <p className="paragraph__tabs">{car.Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
