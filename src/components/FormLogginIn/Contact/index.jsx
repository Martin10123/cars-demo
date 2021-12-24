import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";
import adress from "../../../Images/svgs/adress.svg";
import email from "../../../Images/svgs/email.svg";
import phone from "../../../Images/svgs/phone.svg";
import "./contact.css";

const Contact = ({ history }) => {
  const [formValue, changeRegister] = useForm({
    nameContact: "",
    emailContact: "",
    messageContact: "",
  });

  const { nameContact, emailContact, messageContact } = formValue;

  const handleClick = () => {
    history.replace("/");
  };

  return (
    <section className="section_contact">
      <Link to="/">
        <button className="btn--close btn_contact_close">X</button>
      </Link>
      <div className="contain_box_contact">
        <div className="contact_info">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            natus alias. Atque fugiat voluptatem dolor aut excepturi ea repellat
            odit. Esse atque animi enim iusto repudiandae doloremque suscipit
            doloribus voluptatibus!
          </p>
        </div>
        <div className="container_contain_form_contact">
          <div className="with_logos">
            <div className="container_logos_img">
              <img src={adress} alt="adress" />
              <div className="contain_info_about_boss">
                <h3>Dirección</h3>
                <p>Cartagena - Colombia</p>
                <p>Barrio - Torices</p>
                <p>50001</p>
              </div>
            </div>
            <div className="container_logos_img">
              <img src={phone} alt="phone" />
              <div className="contain_info_about_boss">
                <h3>Telefono</h3>
                <p>(57)-(300)-(456)-(7890)</p>
              </div>
            </div>
            <div className="container_logos_img">
              <img src={email} alt="email" />
              <div className="contain_info_about_boss">
                <h3>Email</h3>
                <p>Esteesmicorreo@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="inputs_form_contact">
            <h2>Envianos un mensaje</h2>
            <form action="" className="box_inputs_contact">
              <span>Su nombre</span>
              <input
                name="nameContact"
                value={nameContact}
                onChange={changeRegister}
                placeholder="Ingrese su nombre..."
                type="text"
                required
              />
              <span>Su email</span>
              <input
                name="emailContact"
                value={emailContact}
                onChange={changeRegister}
                placeholder="Ingrese su email..."
                type="email"
                required
              />
              <span>Dejenos su mensaje</span>
              <textarea
                name="messageContact"
                value={messageContact}
                onChange={changeRegister}
                placeholder="Dejenos su comentario..."
                required
              />
              <button onClick={handleClick} className="btn_send_contact">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
