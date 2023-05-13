import React from 'react';

import SecaoBanner from './secao-banner';
import SecaoProdutos from './secao-produtos';
import SecaoSobre from './secao-sobre';
import Contatos from './secao-contatos';


function Conteudo(){
    return(
    <main>
      <SecaoBanner />
      <SecaoProdutos />
      <SecaoSobre />
      <Contatos />
    </main>
    );
}

export default Conteudo;