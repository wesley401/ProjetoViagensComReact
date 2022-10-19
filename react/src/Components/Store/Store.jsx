import React, { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import "./store.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8c/14/06/ipanema.jpg?w=1200&h=-1&s=1",
    destTitle: "Rio de Janeiro",
    location: "Brasil",
    grade: "PARA RELAXAR ",
    fees: "R$150",
    description:
      "Rio de Janeiro é cheio de paisagens paradisíacas,  também conta com belíssimos parques e reservas de matas atlânticas.",
  },
  {
    id: 2,
    imgSrc:
      "https://portokaete.com.br/site/wp-content/uploads/2021/05/clima-de-maceio-Kaio-Fragoso-1.jpg",
    destTitle: "Maceió",
    location: "Brasil",
    grade: "PARA ADMIRAR ",
    fees: "R$200",
    description:
      "Paraíso das Águas e Caribe Brasileiro são apenas duas das muitas formas carinhosas com as quais ficou conhecida Maceió.",
  },
  {
    id: 3,
    imgSrc:
      "https://dsdsuzy1jtjfw.cloudfront.net/wp-content/uploads/2019/12/pr_foz_do_iguacu_cataratas_credito_shutterstock_337634303-1-1-1024x683.jpg",
    destTitle: "Foz do Iguaçu",
    location: "Brasil",
    grade: "PARA CURTIR",
    fees: "R$350",
    description:
      "Foz do Iguaçu é conhecida mundialmente por belezas como as Cataratas do Iguaçu e Itaipu Binacional",
  },
  {
    id: 4,
    imgSrc:
      "https://d6z7b7h8.stackpathcdn.com/wp-content/uploads/2021/03/arraial-dajuda-porto-seguro-e1615571088189.jpg",
    destTitle: "Porto seguro",
    location: "Brasil",
    grade: "PARA RELAXAR ",
    fees: "R$300",
    description:
      "Em Porto Seguro, você pode conhecer de perto a cultura indígena pataxó e visitar alguns dos marcos da ocupação portuguesa no Brasil",
  },
  {
    id: 5,
    imgSrc:
      "https://www.seumochilao.com.br/wp-content/uploads/2019/02/sao-paulo-1.jpg",
    destTitle: "São Paulo",
    location: "Brasil",
    grade: "PARA OBSERVAR ",
    fees: "R$100",
    description:
      " A maior parte da riqueza cultural de São Paulo está concentrada na capital. Entre os destaques estão monumentos, como a Catedral da Sé e a Igreja da Ordem Terceira do Carmo.",
  },
  {
    id: 6,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Praia_de_Ponta_Negra_Natal_-_RN.jpg",
    destTitle: "Natal",
    location: "Brasil",
    grade: "PARA ADMIRAR ",
    fees: "R$220",
    description:
      "Com um dos mais belos litorais do Brasil, que se estende por mais de 400 Km, Natal é considerada a cidade que possui o ar mais puro da América do Sul.",
  },
  {
    id: 7,
    imgSrc:
      "https://cdn.turistipercaso.it/media?src=/uploads/2021/11/montagna-ac1e6.jpg&sharpen&save-as=webp&crop-to-fit&w=944&h=595&q=60",
    destTitle: "Roraima",
    location: "Brasil",
    grade: "PARA ADMIRAR",
    fees: "R$450",
    description:
      "O estado de Roraima fica localizado em uma região periférica da Amazônia Legal, no noroeste da região norte do Brasil.",
  },
  {
    id: 8,
    imgSrc:
      "https://diaonline.ig.com.br/wp-content/uploads/2022/07/o-que-faz-de-goiania-o-melhor-municipio-para-se-viver-em-todo-brasil-3.jpg",
    destTitle: "Goiania",
    location: "Brasil",
    grade: "PARA RELAXAR ",
    fees: "R$330",
    description:
      "Quem disse que Goiânia não tem mar? Goiás pode até não ter mar, mas têm praias que atraem milhares de turistas todos os anos, e não é só em temporada de férias.",
  },
];

export default function Store() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" className="section">
      <div className="store container">
        <div className="secBuyContent">
          <p>Login</p>
          <p>
            Meu Carrinho <FaShoppingCart className="icon" />
          </p>
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
                    COMPRAR
                    <FaShoppingCart className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="secTitle">
          <h3 className="title">Forma de Pagamento:</h3>
          <img
            src="https://i0.wp.com/urucuna.com/wp-content/uploads/2021/02/bandeiras-cartoes-credito.png?ssl=1"
            alt="forma de pagamento"
          />
        </div>
      </div>
    </section>
  );
}
