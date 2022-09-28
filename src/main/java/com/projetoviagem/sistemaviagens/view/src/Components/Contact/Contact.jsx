import React, { useEffect } from "react";
import './contact.css'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="section">
      <div className="container">
        <div  data-aos="fade-up" className="Contact">
        <label htmlFor="email">Nome e Sobrenome:</label>
          <div className="input">
            <input type="text" placeholder="nome" required/>
          </div>
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input type="text" placeholder="email" required/>
          </div>
          <label htmlFor="email">Telefone:</label>
          <div className="input">
            <input type="text" placeholder="Telefone" required/>
          </div>
          <label htmlFor="textarea">Mensagem:</label>
          <div className="textarea">
            <textarea name="Mensagem" id="1" rows="5"></textarea>
          </div>
          <label htmlFor="email">Como Prefere Nosso Contato?:</label>
          <div className="input">
          <select class="form-control" id="exampleFormControlSelect1">
                        <option>whatsapp</option>
                        <option>telefone</option>
                        <option>email</option>
                        <option>mensagem(sms)</option>
                    </select>
          </div>
          <div className="btnLogin">
            <button className="btn">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
}