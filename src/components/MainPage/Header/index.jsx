import React, { useState } from "react";
import { Link } from "react-router-dom";
import car from "../../../Images/svgs/car.svg";
import menu from "../../../Images/svgs/icon.svg";

import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="icon">
          <div onClick={handleShowMenu} className="navbar__content_img">
            <Link to="/">
              <img src={car} alt="a" />
            </Link>
            <Link to="/">
              <p>Nombre</p>
            </Link>
          </div>
          <div onClick={handleShowMenu} className="hamburger">
            <img src={menu} alt="a" />
          </div>
        </div>
        <div
          className={
            show
              ? "navbar__content_form_list active"
              : "navbar__content_form_list oculto"
          }
        >
          <div className="loguin__menu">
            <p>Crear una cuenta</p>
            <p>Ingresar con mi cuenta</p>
          </div>
          <form className="form_mobile">
            <input type="text" placeholder="Busque el carro..." />
            <button>buscar</button>
          </form>
          <div className="navbar__content_list">
            <ul>
              <Link to="/login">
                <li>Ingresar</li>
              </Link>
              <Link to="/register">
                <li>Crear Cuenta</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
