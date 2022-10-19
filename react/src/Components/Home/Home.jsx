import React, { useEffect } from "react";
import "./home.css";
import video from "../../assets/video/praia.mp4";
import { GoLocation } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Nossos pacotes
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Preocure as suas Ferias
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div data-aos="fade-up" className="destinationInput">
            <label htmlFor="city">Preocure seu destino:</label>
            <div className="input flex">
              <input type="text" placeholder="Voçê vai para??" />
              <GoLocation className="icon" />
            </div>
          </div>

          <div data-aos="fade-up" className="dateInput">
            <label htmlFor="date">Selecione a data:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div data-aos="fade-up" className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Preço Maximo:</label>
              <h3 className="total">R$2000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="2000" min="100" />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <BsFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <RiWhatsappFill className="icon" />
          </div>
          <div className="leftIcons">
            <FaListAlt className="icon" />
            <AiOutlineAppstoreAdd className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
