import React from 'react';

import './style.css';

function SecaoBanner(){
    return(
      <section className='imagem-de-fundo'>        
        <div className='limitar-secao'>
          <div className='capa'>
            <p> Preços baixos em </p>
            <h1>Óculos de grau e de sol</h1>    
            <p>Você só encontra aqui</p> 
          </div> 
        </div>      
      </section>
    );
}

export default SecaoBanner;