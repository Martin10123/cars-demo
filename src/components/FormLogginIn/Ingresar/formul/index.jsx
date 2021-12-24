import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../../Hooks/useForm";

const info = {
  nombre: "Martin",
  password: "Martin10",
};

const FormLogin = () => {
  const [disableBoton, setDisableBoton] = useState(true);

  const [loginValues, inputChangeLogin] = useForm({
    login: "",
    passwordLogin: "",
  });

  const { login, passwordLogin } = loginValues;

  useEffect(() => {
    if (login.length > 2 && passwordLogin.length > 2) {
      setDisableBoton(false);
    } else {
      setDisableBoton(true);
    }
  }, [login, passwordLogin]);

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    setDisableBoton(true);
    if (login === info.nombre && passwordLogin === info.password) {
      setDisableBoton(true);
    } else {
      setDisableBoton(false);
    }
  };

  return (
    <form onSubmit={handleSubmitInfo}>
      <div className="form_inputs_login">
        <input
          name="login"
          type="text"
          placeholder="Ingrese su nombre de usuario..."
          className="input_login"
          autoComplete="off"
          value={login}
          onChange={inputChangeLogin}
        />

        <input
          name="passwordLogin"
          type="password"
          placeholder="Ingresar su contraseña..."
          className="input_login"
          value={passwordLogin}
          onChange={inputChangeLogin}
        />
      </div>
      <div className="box_btn_login">
        <button type="submit" className="btn_login" disabled={disableBoton}>
          Ingresar
        </button>
      </div>

      <Link to="/">
        <span className="span_in_login">¿Olvidaste tu contraseña?</span>
      </Link>
      <Link to="/register">
        <span className="span_in_login">¿Aún no tienes una cuenta?</span>
      </Link>
    </form>
  );
};

export default FormLogin;
