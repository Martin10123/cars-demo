import cars from "../Data";

const funcionAside = (name) => {
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
    return <li key={car.id}>{car[name]}</li>;
  });
};

export default funcionAside;
