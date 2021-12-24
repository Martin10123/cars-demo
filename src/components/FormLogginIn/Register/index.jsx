import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";
import "./register.css";

const Register = () => {
  const [changeGeneroSelect, setChangeGeneroSelect] = useState("");

  const handleChangeSelect = ({ target }) => {
    setChangeGeneroSelect(target.value);
  };

  const [formValues, handleInputRegister] = useForm({
    fullNameRegister: "",
    passwordRegister: "",
    passwordConfirmRegister: "",
    emailRegister: "",
    UsernameRegister: "",
    phoneRegister: "",
  });

  const {
    fullNameRegister,
    passwordRegister,
    passwordConfirmRegister,
    emailRegister,
    UsernameRegister,
    phoneRegister,
  } = formValues;

  return (
    <div className="container_register">
      <Link to="/">
        <button className="btn--close btn_register_close">X</button>
      </Link>
      <div className="box_register">
        <h2>Registration</h2>
        <form action="">
          <div className="inputs_register">
            <div className="first_inputs">
              <div className="input_box">
                <span className="span_register_inputs">Full Name</span>
                <input
                  name="fullNameRegister"
                  value={fullNameRegister}
                  onChange={handleInputRegister}
                  placeholder="Ingrese su nombre..."
                  type="text"
                  required
                />
              </div>
              <div className="input_box">
                <span className="span_register_inputs">Email</span>
                <input
                  name="emailRegister"
                  value={emailRegister}
                  onChange={handleInputRegister}
                  placeholder="Ingrese su email..."
                  type="email"
                  required
                />
              </div>
              <div className="input_box">
                <span className="span_register_inputs">Password</span>
                <input
                  name="passwordRegister"
                  value={passwordRegister}
                  onChange={handleInputRegister}
                  placeholder="Ingrese su contraseña"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="first_inputs">
              <div className="input_box">
                <span className="span_register_inputs">Username</span>
                <input
                  name="UsernameRegister"
                  value={UsernameRegister}
                  onChange={handleInputRegister}
                  placeholder="Ingrese su usuario..."
                  type="text"
                  required
                />
              </div>
              <div className="input_box">
                <span className="span_register_inputs">Phone Number</span>
                <input
                  name="phoneRegister"
                  value={phoneRegister}
                  onChange={handleInputRegister}
                  placeholder="Ingrese su número..."
                  type="number"
                  required
                />
              </div>
              <div className="input_box">
                <span className="span_register_inputs">Confirm Password</span>
                <input
                  name="passwordConfirmRegister"
                  value={passwordConfirmRegister}
                  onChange={handleInputRegister}
                  placeholder="Confirme su contraseña"
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="checked_genero">
            <select
              required
              value={changeGeneroSelect}
              onChange={handleChangeSelect}
            >
              <option value="">Escoge tu genero</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="No especificado">Prefiero no especificar</option>
            </select>
          </div>
          <div className="box_btn_register">
            <button className="button_register">Register</button>
          </div>
        </form>

        <div className="box_end">
          <Link to="/login">
            <p>¿Ya tienes una cuenta?</p>
          </Link>
          <Link to="/contact">
            <p>¿Tienes algun problema?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
