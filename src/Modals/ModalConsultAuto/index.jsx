import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ModalContext from "../../usesContext/ModalContext";

import "./consultAuto.css";

const ModalQuestionAuto = () => {
  const { showModalConsultAuto } = useContext(ModalContext);

  return (
    <div className="modal_question__box">
      <div className="modal_question__content">
        <div className="modal_question__info">
          <div className="modal_question__btn_close_modal">
            <button onClick={showModalConsultAuto}>X</button>
          </div>
          <h1 className="title_consult_modal pad_bot">Consultar Auto</h1>
          <h2 className=" title_contri_modal pad_bot">Cartagena - Colombia</h2>
          <form className="modal_question__form">
            <input type="text" placeholder="Nombre..." required />
            <input type="text" placeholder="Apellido..." required />
            <input type="email" placeholder="Email..." required />
            <input type="number" placeholder="Número Celular..." required />
            <textarea
              required
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Escribe un mensaje"
            />
            <div className="modal_question__btn_modal">
              <button>Enviar</button>
            </div>
            <div className="modal_question__login_register">
              <Link className="modal_question__login_modal" to="/login">
                ¿ya tienes una cuenta?
              </Link>
              <Link className="modal_question__register_modal" to="/register">
                ¿Aún no tienes una cuenta?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalQuestionAuto;
