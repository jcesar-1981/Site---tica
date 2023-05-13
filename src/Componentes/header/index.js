import React from 'react';
import './style.css';

function Header(){
    return(
      <header>
        <div className="limitar-secao">            
            <img src='assets/imagens/logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' />                 
            <nav>
                <a href="#Produtos">PRODUTOS</a>
                <a href="#Sobre">SOBRE</a>
                <a href="#Contato">CONTATO</a>
            </nav>
        </div>
      </header>
    );
}

export default Header;