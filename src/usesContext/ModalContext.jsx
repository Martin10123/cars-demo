import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ContextModal = ({ children }) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [modalMarcas, setModalMarcas] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [modalYears, setModalYears] = useState(false);
  const [modalColors, setModalColors] = useState(false);
  const [modalConsultAuto, setMmodalConsultAuto] = useState(false);

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
  const showModalConsultAuto = () => {
    setMmodalConsultAuto(!modalConsultAuto);
  };

  const modalReturns = {
    // showModal,
    showModalMarcas,
    showModalName,
    showModalYears,
    showModalColors,
    showModalConsultAuto,
    // modalOpen,
    modalMarcas,
    modalName,
    modalYears,
    modalColors,
    modalConsultAuto,
  };

  return (
    <ModalContext.Provider value={modalReturns}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
