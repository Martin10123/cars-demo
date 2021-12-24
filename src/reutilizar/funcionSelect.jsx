import cars from "../Data";

export const createCarOptions = (name) => {
  let sinRepetidos = cars.filter((valorActual, indiceActual, arreglo) => {
    return (
      arreglo.findIndex(
        (valorDelArreglo) =>
          JSON.stringify(valorDelArreglo[name]) ===
          JSON.stringify(valorActual[name])
      ) === indiceActual
    );
  });

  let newArray = sinRepetidos.sort((a, b) => {
    if (a[name] < b[name]) {
      return -1;
    }
    if (a[name] > b[name]) {
      return 1;
    }
    return 0;
  });

  return newArray.map((car) => {
    return <option key={car.id}>{car[name]}</option>;
  });
};

export const carOptionsPrice = (price) => {
  let newArray = cars.sort((a, b) => {
    if (a[price] < b[price]) {
      return -1;
    }
    if (a[price] > b[price]) {
      return 1;
    }
    return 0;
  });

  return newArray.map((car) => {
    return <option key={car.id}>$ {car[price]}</option>;
  });
};
