import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useForm } from "../../Hooks/useForm";

import "./consultAuto.css";

const ModalQuestionAuto = ({ setMmodalConsultAuto }) => {
  const [error, setError] = useState("");
  const [valueConsult, handleInputConsult] = useForm({
    name: "",
    apellido: "",
    email: "",
    celu: "",
    message: "",
  });

  const { name, apellido, email, celu, message } = valueConsult;

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setMmodalConsultAuto(false);
      Swal.fire(
        "Su consulta fue enviada con exito",
        "Gracias por escoger este auto",
        "success"
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length < 2) {
      setError("El nombre debe tener mas de 2 digitos");
      return false;
    } else if (apellido.trim().length < 2) {
      setError("El apellido debe tener mas de 2 digitos");
      return false;
    } else if (email.trim().length < 10) {
      setError("Ingrese un email correcto");
      return false;
    } else if (typeof celu !== "number" && celu < 9) {
      setError("Ingrese un numero correcto de 10 digitos");
      return false;
    } else if (message.trim().length < 10) {
      setError("Ingrese un mensaje un poco mas largo");
      return false;
    }

    return true;
  };

  return (
    <div className="modal_question__box">
      <div className="modal_question__content">
        <div className="modal_question__info">
          <div className="modal_question__btn_close_modal">
            <button onClick={() => setMmodalConsultAuto(false)}>X</button>
          </div>
          <h1 className="title_consult_modal pad_bot">Consultar Auto</h1>
          <h2 className=" title_contri_modal pad_bot">Cartagena - Colombia</h2>
          <form className="modal_question__form">
            <input
              name="name"
              type="text"
              placeholder="Nombre..."
              required
              autoComplete="off"
              value={name}
              onChange={handleInputConsult}
            />
            <input
              name="apellido"
              type="text"
              placeholder="Apellido..."
              required
              autoComplete="off"
              value={apellido}
              onChange={handleInputConsult}
            />
            <input
              name="email"
              type="email"
              placeholder="Email..."
              required
              autoComplete="off"
              value={email}
              onChange={handleInputConsult}
            />
            <input
              name="celu"
              type="number"
              placeholder="Número Celular..."
              required
              autoComplete="off"
              value={celu}
              onChange={handleInputConsult}
            />
            <textarea
              required
              name="message"
              autoComplete="off"
              id=""
              cols="30"
              rows="10"
              placeholder="Escribe un mensaje"
              value={message}
              onChange={handleInputConsult}
            />
            <div className="modal_question__btn_modal">
              <button onClick={handleSubmitRegister}>Enviar</button>
            </div>
            <p className="modal_error">{error}</p>
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
