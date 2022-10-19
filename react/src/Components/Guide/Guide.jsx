import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './guide.css'

const GuideData = [
  {
  id: 1,
  imgSrc: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "MICHELE ",
  description: "Gosto de conversar entender mais sobra a vida, se quer um bom papo e conhecer mais sobre maceio pode deixar que te mostro!" ,
},
{
    id: 2,
    imgSrc: "https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg",
    name: "MAICON ",
    description: "Sou carismatico e atencioso, faço tur pela cidade de salvador, se quer um parceiro para contar na sua viagem e dar boas risadas conta comigo!" ,
  },
{
  id: 3,
  imgSrc: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Gustavo",
  description: "Nao só um guia mais um mapa turistico em pessoa, conheço o Rio de janeiro como ninguem, adoro fazer uma amizade nova !" ,
},
{
  id: 4,
  imgSrc: "https://images.pexels.com/photos/1971976/pexels-photo-1971976.jpeg",
  name: "Suze",
  description: "Uma especialista em museums e teatro, por dentro das novidades dos artista de São paulo podendo te mostrar tudo que a de melhor nessa cidade maravilhosa!" ,
},
]

export default function Guide() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section  data-aos="fade-up" className="section">
      {GuideData.map((item) => {
          return (
    <div data-aos="fade-up" className="container">
      <div className="cardDiv">
      <img src={item.imgSrc} alt="Guia" />
      <div className="text">
        <h4 className="title">{item.name} </h4>
       <p className="subTitle">{item.description}</p>  
           <button className="btn btnContract">Contratar</button>
      </div>
      </div>
    </div>)
        })}
        <div data-aos="fade-up" className="container">
        <div className="cardDivText">
          <h3>Quer ser um guia ?</h3>
          <p  className="subTitle">É preciso se especializar em nossos cursos, que tem como didatica Guiar e atender o publico com baixa mobilidade ou com diferntes tipos de deficiência!</p>
          <h3>Como ser contratado ?</h3>
          <p className="subTitle">Quando voçê enviar seu Email, enviaremos um formulario para preenchimento e analise de perfil.</p>
          <label htmlFor="">Mande seu Email:</label>
          <input type="text" />
          <button className="btn">Enviar</button>
          </div>
        </div>
    </section>
  )}