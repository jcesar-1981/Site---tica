import React from 'react';

import './style.css'

function Contatos (){
    return(
        <section className="secao-contatos" id="Contato">
            <div>
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                
                <div className='container-master'>
                    <div className='container-1'>
                            <h2>Contato</h2>
                            <div className="card-contato">
                               
                                <img src='assets/imagens/local.png'/>
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div className="card-contato">
                                <img src='assets/imagens/telefone.png'/>
                                <p>(21) 9999-9999</p>
                            </div>
                            <div className="card-contato">
                                <img src='assets/imagens/email.png'/>
                                <p>contato@oticavida.com</p>
                            </div>
                    </div>
                    <div className='container-2'>
                            <h2>Nossas Redes Sociais</h2>
                            <div className="card-contato">
                                
                                <img src ='assets/imagens/fb.png'/>
                                <p>/OticaVida</p>
                            </div>
                            <div className="card-contato">
                                <img src ='assets/imagens/ig.png'/>   
                                <p>@oticavidarj</p>
                            </div>
                            <div className="card-contato">
                                <img src ='assets/imagens/tt.png'/> 
                                <p>@oticavidarj</p>
                            </div>                                      
                    </div>
                </div>
             </div>  

        </section>      
    );
}

export default Contatos;