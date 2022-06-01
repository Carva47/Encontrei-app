import React from 'react'
import { useState } from "react";
import { Container, Content } from './styles'
import { FaTimes,} from 'react-icons/fa'
import './styles.css';


const Sidebar = ({ active }) => {
  const [text, setText] = useState("");
  const [local, setLocal] = useState("");
  const [quando, setQuando] = useState("");

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
       <div className="titulo"> 
            <span className="form-titulo1"> Encon🪂rei </span>
            <span className="form-titulo">Achados e Perdidos</span>
          </div>   
          <div className="Janela-Esquerda">
            <div>
            <h2 className="txt-perguntas1"> Achado ou Perdido ?</h2> 
          <div className="btn-Achado-Perdido">                
              <button className="btn-Achado">Achei</button>
              <button className="btn-Perdido" >Perdi</button>
              </div>
              
              </div>
            <form className="form-Esquerda">   

            <h2 className="txt-perguntas"> O que você perdeu ?</h2>
  
              <div className="divisor-input">
                <input
                  className={text !== "" ? "has-val input" : "input"}
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <span className="foco" data-placeholder="Ex:.Bilhete de indentidade"></span>
              </div>
  
              <h2 className="txt-perguntas"> O que você perdeu ?</h2>
              <div className="divisor-input">
                <input
                  className={local !== "" ? "has-val input" : "input"}
                  type="location"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                />
                <span className="foco" data-placeholder="Rua José Pirão-Luanda"></span>
              </div>            
            <h2 className="txt-perguntas"> O que você perdeu ?</h2>
              <div className="divisor-input">
                <input
                  className={quando !== "" ? "has-val input" : "input"}
                  type="data"
                  value={quando}
                  onChange={(e) => setQuando(e.target.value)}
                />
                <span className="foco" data-placeholder="Rua José Pirão-Luanda"></span>
              </div>
              <div className="container-form-btn">      
              <button className="form-btn">🔍 Buscar</button>
              </div>
            </form>
           </div>
      </Content>
    </Container>
  )
}

export default Sidebar