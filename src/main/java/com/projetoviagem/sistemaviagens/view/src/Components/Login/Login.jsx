import React, { useEffect, useState } from "react";
import "./login.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Login() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const [nome,setNome]=useState('')
  const [login,setLogin]=useState('')
  const [senha,setSenha]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const usuario={nome,login,senha}
    console.log(usuario)
    fetch("http://localhost:8080/usuario/add",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(usuario)
    }).then(()=>{
      alert("Novo usuario Adicionado!!")
    })
  }
  
  return (
    <section data-aos="fade-up" className="section">
      <div className="container">
        <div className="login">
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input type="text" placeholder="email" required/>
          </div>
          <label htmlFor="password">Senha:</label>
          <div className="input">
            <input type="password" placeholder="senha" required/>
          </div>
          <div className="btnLogin">
            <button className="btn">Logar</button>
          </div>
        </div>
        <div  data-aos="fade-up" className="login">
        <label htmlFor="email" >Nome:</label>
          <div className="input">
            <input type="text"placeholder="nome" required 
            value={nome}
            onChange={(e)=>setNome(e.target.value)} />
          </div>
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input type="text" placeholder="email" required 
            value={login}
            onChange={(e)=>setLogin(e.target.value)}/>
          </div>
          <label htmlFor="password">Senha:</label>
          <div className="input">
            <input type="password" placeholder="senha" required 
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}/>
          </div>
          <label htmlFor="email">Cep:</label>
          <div className="input">
            <input type="text" placeholder="cep"/>
          </div>
          <div className="btnLogin">
            <button className="btn" onClick={handleClick}>Cadastrar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
