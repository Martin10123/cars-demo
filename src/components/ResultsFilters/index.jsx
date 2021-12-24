import React, { useContext, useState } from "react";
import ModalContext from "../../usesContext/ModalContext";
import { ChangeContext } from "../../usesContext/ChangeContext";
import Slider from "infinite-react-carousel";

import Aside from "./Aside";
import ResultsCard from "./ResultsCard";

import ModalToMarcas from "../../Modals/ModalToMarcas";
import ModalToName from "../../Modals/ModalToName";
import ModalToYears from "../../Modals/ModalToYears";
import ModalToColors from "../../Modals/ModalToColors";

import "./resultsFilters.css";

const ResultsFiltros = () => {
  const { modalMarcas, modalName, modalYears, modalColors } =
    useContext(ModalContext);

  const { nameCar, newCar } = useContext(ChangeContext);

  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <div className="contain_results_aside">
        <div className="button__show_more_info">
          <button onClick={handleShowInfo}>
            {!showInfo ? "Show" : "Hidden"}
          </button>
        </div>

        <div className="inside_filtros_car">
          <Slider dots>
            {newCar.map((img) => (
              <div key={img.id} className="site_img_car">
                <img src={img.Img} alt="" />
              </div>
            ))}
          </Slider>
          {nameCar === "Elige el nombre" && (
            <div className="inside_filtros__info_slider">
              <div className="inside_filtros_info_content">
                <div className="inside_filtros__title">
                  <h1>{nameCar}</h1>
                  <h2>$300.000.000</h2>
                </div>
                <div className="inside_filtros__info_aditional">
                  <div className="inside_info_aditional1">
                    <p>tipo</p>
                    <p>auteco</p>
                  </div>
                  <div className="inside_info_aditional2">
                    <p>usado</p>
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="group_map_card">
            {newCar.map((data) => (
              <ResultsCard key={data.id} dataInfo={data} />
            ))}
          </div>
        </div>

        <Aside showInfo={showInfo} />
      </div>
      {modalMarcas && <ModalToMarcas />}
      {modalName && <ModalToName />}
      {modalYears && <ModalToYears />}
      {modalColors && <ModalToColors />}
    </>
  );
};

export default ResultsFiltros;
