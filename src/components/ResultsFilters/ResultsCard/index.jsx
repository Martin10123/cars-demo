import React from "react";
import { useHistory } from "react-router-dom";

import "./resultsCard.css";

const ResultsCard = ({ dataInfo }) => {
  const history = useHistory();

  const handleInfo = () => {
    history.push(`/cardSelect/${dataInfo.Nombre}`);
  };

  return (
    <div className="cards_result_cars">
      <div className="inside_results_card">
        <div className="this_box_img">
          <img src={dataInfo.Img} alt="" className="img_results" />
        </div>

        <div className="info_outside_img">
          <div className="info_of_cards">
            <h2>{dataInfo.Nombre}</h2>
          </div>
          <ul>
            <div className="space_list">
              <li className="list_inside_car_item size">$ {dataInfo.Precio}</li>
              <li className="list_inside_car_item1">{dataInfo.Anio}</li>
            </div>
            <div className="space_list space_list2">
              <li className="list_inside_car_item">{dataInfo.Ubicacion}</li>
              <li className="list_inside_car_item1">{dataInfo.Condicion}</li>
            </div>
          </ul>
          <p className="p_description">{dataInfo.Description}</p>
          <div className="card_end_box">
            <button onClick={handleInfo} className="btn_results_card">
              Consultar auto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
