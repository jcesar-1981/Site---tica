import React from 'react';

import Header from './Componentes/header';
import Conteudo from './Componentes/conteudo';
import Rodape from './Componentes/footer';

import './App.css'

function App(){
  return(

    <div className="App">
      <Header />
      <Conteudo />
      <Rodape />  
    </div>
    
  );
}

export default App;