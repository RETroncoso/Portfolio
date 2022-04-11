import "./Contact.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);

    if (
      e.target[0].value.length === 0 ||
      e.target[1].value.length === 0 ||
      e.target[2].value.length === 0
    ) {
      return setError(true);
    } else {
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        return setSuccess(false);
      }, 3000);

      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";

      emailjs
        .sendForm(
          "service_t3esgl9",
          "template_jjrnfj5",
          form.current,
          "ob_WHgqSr2ZdlowMY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="contactWrapper" id="contacto">
      <h3>CONTACTO</h3>
      <p>¿Te gustaría que trabajemos juntos?</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input id="sndBtn" type="submit" value="Enviar" />
        {error && (
          <span class="error">Todos los campos deben ser completados</span>
        )}
        {success && (
          <span class="success">El mensaje ha sido enviado exitosamente</span>
        )}
      </form>
    </section>
  );
};
