import React from "react";
import CardMain from "./CardMain";
import cars from "../../../../Data";

const RunCardMain = () => {
  return (
    <>
      <div className="image-tres_box">
        <h1 className="image-tres_title">Vehiculos Principales:</h1>
        <div className="image-tres_content">
          <div className="image-tres_part_scroll">
            {cars.map((img) => {
              return <CardMain key={img.id} img={img} />;
            })}
          </div>
        </div>
      </div>
      <div className="image-tres_box">
        <h1 className="image-tres_title">Vehiculos más buscados:</h1>
        <div className="image-tres_content">
          <div className="image-tres_part_scroll">
            {cars.map((img) => {
              return <CardMain key={img.id} img={img} />;
            })}
          </div>
        </div>
      </div>
      <div className="image-tres_box">
        <h1 className="image-tres_title">Vehiculos más comprados:</h1>
        <div className="image-tres_content">
          <div className="image-tres_part_scroll">
            {cars.map((img) => {
              return <CardMain key={img.id} img={img} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunCardMain;
