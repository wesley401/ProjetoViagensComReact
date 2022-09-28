import React, {useEffect} from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./main.css";

const Data = [
  {
    id: 1,
    imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8c/14/06/ipanema.jpg?w=1200&h=-1&s=1",
    destTitle: "Rio de Janeiro",
    location: "Brasil",
    grade: "PARA RELAXAR ",
    fees: "R$150",
    description: "Rio de Janeiro é cheio de paisagens paradisíacas, também conta com belíssimos parques e reservas de matas atlânticas." ,
  },
  {
    id: 2,
    imgSrc: "https://descubre.rci.com/wp-content/uploads/2020/02/Maceio_FotoCuadrada.jpg",
    destTitle: "Maceió",
    location: "Brasil",
    grade: "PARA ADMIRAR ",
    fees: "R$200",
    description: "Paraíso das Águas e Caribe Brasileiro são apenas duas das muitas formas carinhosas com as quais ficou conhecida Maceió." ,
  },
  {
    id: 3,
    imgSrc: "https://dsdsuzy1jtjfw.cloudfront.net/wp-content/uploads/2019/12/pr_foz_do_iguacu_cataratas_credito_shutterstock_337634303-1-1-1024x683.jpg",
    destTitle: "Foz do Iguaçu",
    location: "Brasil",
    grade: "PARA CURTIR ",
    fees: "R$350",
    description: "Foz do Iguaçu é conhecida mundialmente por belezas como as Cataratas do Iguaçu e Itaipu Binacional" ,
  },
  {
    id: 4,
    imgSrc: "https://janelasabertas.com/wp-content/uploads/2022/04/porto-seguro-arraial1-scaled.jpg",
    destTitle: "Porto seguro",
    location: "Brasil",
    grade: "PARA RELAXAR ",
    fees: "R$300",
    description: "Em Porto Seguro, você pode conhecer de perto a cultura indígena pataxó e visitar alguns dos marcos da ocupação portuguesa no Brasil" ,
  },
  
]

export default function Main() {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])


  return (
    <section  data-aos="fade-up"  className="main container section">
      <div className="secTitle">
        <h3 className="title">Destinos mais visitados</h3>
      </div>
      <div className="secContent">
        {Data.map((item) => {
          return (
            <div key={item.id} className="singleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>

                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="nome">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>

                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>

                <button className="btn flex">
                  DETALHES
                  <TbListDetails className="icon" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
