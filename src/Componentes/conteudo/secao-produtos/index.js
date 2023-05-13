import React from 'react';
import '../secao-produtos/style.css';


function SecaoProdutos(){
    return(
      <section className="secao-produtos" id="Produtos">
        <div>
            <h2>Nossos produtos</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p> 
            <div className='produtos'>    
                <div className='container-card'>
                    <div className='card'>
                        <h2>Óculos de grau</h2>
                        <img src='assets/imagens/oculos01.png'/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos transition</h2>
                        <img src='assets/imagens/oculos02.png'/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos de sol</h2>
                        <img src='assets/imagens/oculos03.png'/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos infantil</h2>
                        <img src='assets/imagens/oculos04.png'/>
                        <p>R$ 500,00</p>
                    </div>
                </div>
            </div> 
            <p>Todos os nossos produtos incluem:</p>
            <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
            </ul>       
        </div>       
       </section>  

   
    );
}

export default SecaoProdutos;