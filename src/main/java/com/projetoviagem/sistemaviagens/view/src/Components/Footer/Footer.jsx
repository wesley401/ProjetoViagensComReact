import React from 'react'
import video from '../../assets/video/praia2.mp4'
import './footer.css'
import {RiMailSendFill}from 'react-icons/ri'
import {SiYourtraveldottv} from'react-icons/si'
import {BsTwitter} from'react-icons/bs'
import {AiFillYoutube ,AiFillInstagram , AiOutlineWhatsApp} from'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {FaRegCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Mantenha o contato
            <h2>Viaje com a gente!</h2></small>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Preencha seu endereco de email" /> 
            <button className="btn flex" type="submit">
              Enviar <RiMailSendFill className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className='icon'/ >NETTUR
              </a>
            </div>
            <div className="footerParagraph">
            NETTUR É UMA SOLUÇÃO EM VIAGENS SOCIAL
Que tem como sua responsabilidade promover viagens seguras para o publico com qualquer tipo de deficiência.
Contamos com guias turísticos treinados para garantir a segurança do nosso publico alvo!E um programa de desconto diferenciado.
            </div>

            <div className="footerSocials">
              <BsTwitter className="icon" />
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <AiOutlineWhatsApp className='icon'/>
            </div>
          </div>
        

        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              NOSSA AGENCIA
            </span>

            <li className="footerList flex">
              <HiOutlineExternalLink className='icon'/>
              Servicos
            </li>

            <li className="footerList flex">
              <HiOutlineExternalLink className='icon'/>
              Seguro
            </li>

            <li className="footerList flex">
              <HiOutlineExternalLink className='icon'/>
              Agencia
            </li>

            <li className="footerList flex">
              <HiOutlineExternalLink className='icon'/>
              Guia turisticos
            </li>
          </div>
          </div>
          <div className="footerDiv flex">
            <small><FaRegCopyright className='icon'/>COPYRIGHT WESLEY 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer