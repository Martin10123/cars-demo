import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const redesSociales = [
    {
      path: "https://www.facebook.com",
      type: "Nuestro Facebook",
    },
    {
      path: "https://web.whatsapp.com/",
      type: "Nuestro WhatsApp",
    },
    {
      path: "https://www.instagram.com/?hl=es",
      type: "Nuestro Instagram",
    },
    {
      path: "https://web.telegram.org/z/",
      type: "Nuestro Telegram",
    },
  ];

  return (
    <footer>
      <div className="div_inside_footer">
        <div className="social_network_find_us pd-5">
          <h2>Nuestras Redes Sociales</h2>
          <p>Nos puedes encontrar en las siguientes redes sociales</p>
          <ul>
            {redesSociales.map((red, i) => {
              return (
                <a key={i} href={red.path} target="blank">
                  <li>{red.type}</li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className="copyright_footer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            libero temporibus est consequuntur dolore qui quod unde provident,
            accusamus molestias illum maiores iure impedit, laudantium, eius rem
            quam doloremque obcaecati.
          </p>
          <h3>Copyright @footer 2017</h3>
        </div>
        <div className="about_us_footer pd-5">
          <h2>Contactanos</h2>
          <span>Telefonos</span>
          <p>(57)-(300)-(456)-(7890)</p>
          <span>Email</span>
          <p>HolaDeNuevo1234@gmail.com</p>
          <span>Dirección</span>
          <p>Cartagena - Colombia</p>
          <p>Torices - Barrio</p>
          <p>50001</p>
        </div>
        <div className="Loguing_footer">
          <h2>Logueate con nosotros</h2>
          <Link to="/login">
            <p>¿Ya tienes una cuenta?</p>
          </Link>
          <Link to="/register">
            <p>¿Aún no tienes una cuenta?</p>
          </Link>
          <Link to="/contact">
            <p>¿Tienes alguna duda?</p>
          </Link>
        </div>
      </div>
      <div className="footer_end">
        <hr />
        <ul className="ul_footer_end">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Terms</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
