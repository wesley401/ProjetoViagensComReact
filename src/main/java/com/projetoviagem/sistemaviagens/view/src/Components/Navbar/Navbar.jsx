import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiOutlineClose}from 'react-icons/ai'
import {GiHamburgerMenu}from 'react-icons/gi'

const Navbar = () => {
  const [active , setActive] = useState('navBar')
  const mostraNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav= ()=>{
    setActive('navBar')
  }
  const navigate = useNavigate();
  const goToLoginPage =()=>{
    navigate('/login');
  }
  const goToHome =()=>{
    navigate('/')
  }
  const goToStorePage =()=>{
    navigate('/store')
  }
  const goToGuidePage =()=>{
    navigate('/guide')
  }
  const goToContactPage =()=>{
    navigate('/contact')
  }
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <p className="logo flex">
            <h1  onClick={goToHome}><SiYourtraveldottv className="icon" />NETTUR</h1>
          </p>
        </div>
        <div className={active}>
          <ul className="navLists flex">
              <li className="navItem">
                <p onClick={goToHome} className="navLink">HOME</p>
              </li>

              <li className="navItem">
                <p onClick={goToStorePage} className="navLink">COMPRAR</p>
              </li>

              <li className="navItem">
                <p onClick={goToGuidePage} className="navLink">GUIA TURISTICO</p>
              </li>
              <li className="navItem">
                <p onClick={goToContactPage} className="navLink">CONTATO</p>
              </li>

              <button onClick={goToLoginPage} className='btn'>
                <p>Login</p>
              </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiOutlineClose className="icon" />
          </div>
        </div>

        <div onClick={mostraNav} className="toggleNavbar">
          <GiHamburgerMenu className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar