import React from "react";
import login from "../../../Images/svgs/login.svg";
import google from "../../../Images/svgs/google.svg";
import facebook from "../../../Images/svgs/facebook.svg";
import FormLogin from "./formul";

import "./ingresar.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container_login">
      <Link to="/">
        <button className="btn--close btn_login_close">X</button>
      </Link>
      <div className="box_info_login">
        <div className="box_inputs_login">
          <h2>Ingresa con: </h2>
          <div className="box_contain_both_logos">
            <button className="contain_logo_img">
              <img className="logos_in_login" src={google} alt="google" />
              <span className="span_login_logo">Google</span>
            </button>
            <button className="contain_logo_img">
              <img className="logos_in_login" src={facebook} alt="facebook" />
              <span className="span_login_logo">Facebook</span>
            </button>
          </div>

          <h3>Or</h3>

          <FormLogin />
        </div>
        <div className="contain_img">
          <img src={login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
