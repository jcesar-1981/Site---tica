import React from 'react';
import './style.css';

function SecaoSobre(){
    return(
      <section className = "secao-sobre" id="Sobre">
        <div>
          <h1>QUEM SOMOS NÓS?</h1>
          <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p> 
        
          <div className="container-sobre">

            <div className='sobre'>
             <img src='assets/imagens/loja.png'/>
            </div>
        
            <div className='sobre'>
              <h1>Nossas Filiais</h1>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>

            <div className='sobre'>
              <img src='assets/imagens/atendimento.png'/>
            </div>    

            <div className='sobre'>
              <h1>Atendimento flexível</h1>
              <p>Nossa equipe possui é treinada para te atender</p>
            </div>

          </div>
        </div>
      </section>
    );
}

export default SecaoSobre;