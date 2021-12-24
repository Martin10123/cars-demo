import cars from "../Data";

export const getHeroByID = (name) => {
  return cars.find((car) => car.Nombre === name);
};
