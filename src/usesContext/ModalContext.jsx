import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ContextModal = ({ children }) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [modalMarcas, setModalMarcas] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [modalYears, setModalYears] = useState(false);
  const [modalColors, setModalColors] = useState(false);

  // const showModal = () => {
  //   setModalOpen(!modalOpen);
  // };
  const showModalMarcas = () => {
    setModalMarcas(!modalMarcas);
  };
  const showModalName = () => {
    setModalName(!modalName);
  };
  const showModalYears = () => {
    setModalYears(!modalYears);
  };
  const showModalColors = () => {
    setModalColors(!modalColors);
  };

  const modalReturns = {
    showModalMarcas,
    showModalName,
    showModalYears,
    showModalColors,
    modalMarcas,
    modalName,
    modalYears,
    modalColors,
  };

  return (
    <ModalContext.Provider value={modalReturns}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
