import { createContext, useState } from "react";
import cars from "../Data";

export const ChangeContext = createContext();

export const AppChangeContext = ({ children }) => {
  const initialState = {
    Nombre: "Elige el nombre",
    Anio: "Elige el año",
    Marca: "Elige la marca",
    Color: "Elige el color",
    Precio: "Elige el precio",
    Puertas: "Elige cuantas puertas",
  };

  const [type, setType] = useState(cars[0].Tipo);
  const [nameCar, setName] = useState(initialState.Nombre);
  const [year, setYear] = useState(initialState.Anio);
  const [door, setDoor] = useState(initialState.Puertas);
  const [color, setColor] = useState(initialState.Color);

  const currentType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  const currentName = (e) => {
    setName(e.target.value);
  };
  const currentYear = (e) => {
    setYear(e.target.value);
  };
  const currentDoor = (e) => {
    setDoor(e.target.value);
  };
  const currentColor = (e) => {
    setColor(e.target.value);
  };

  let changeState = () => {
    let newList = cars
      .filter((carType) => {
        if (type !== carType.Tipo) {
          return carType.Tipo === type;
        } else {
          return true;
        }
      })
      .filter((carName) => {
        if (nameCar !== initialState.Nombre) {
          return carName.Nombre.toLowerCase() === nameCar.toLowerCase();
        } else {
          return true;
        }
      })
      .filter((carYear) => {
        if (year !== initialState.Anio) {
          return +carYear.Anio === +year;
        } else {
          return true;
        }
      })
      .filter((carDoor) => {
        if (door !== initialState.Puertas) {
          return carDoor.Puertas === door;
        } else {
          return true;
        }
      })
      .filter((carColor) => {
        if (color !== initialState.Color) {
          return carColor.Color.toLowerCase() === color.toLowerCase();
        } else {
          return true;
        }
      });
    return newList;
  };

  let newCar = changeState();

  console.log(type);

  const allReturns = {
    nameCar,
    initialState,
    type,
    year,
    door,
    color,
    newCar,
    currentType,
    currentName,
    currentYear,
    currentDoor,
    currentColor,
  };

  return (
    <ChangeContext.Provider value={allReturns}>
      {children}
    </ChangeContext.Provider>
  );
};
