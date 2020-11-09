import React from 'react'
import './Produtos.css'
import image2 from './image2.png'
import picture from './imagem.png'


 class ProdutosCard extends React.Component {
    render()
    {
        return(
            <div className="produtos">
            <div>
              <img src={image2} alt='imagem'/>
            </div>
             <div className="produto1">
                <img src={picture}/> 
                 <p>Produto1</p>
                 <h5> 100,00</h5>
                 <p>Até 12x sem juros</p>
                 <button>Deletar produto</button>
             </div>  
             <div className="produto1">
                <img src={picture}/> 
                 <p>Produto2</p>
                 <h5> 100,00</h5>
                 <p>Até 12x sem juros</p>
                 <button>Deletar produto</button>
             </div>         
             <div className="produto1">
                <img src={picture}/> 
                 <p>Produto3</p>
                 <h5> 100,00</h5>
                 <p>Até 12x sem juros</p>
                 <button>Deletar produto</button>
             </div>  
             <div className="produto1">
                <img src={picture}/> 
                 <p>Produto4</p>
                 <h5> 100,00</h5>
                 <p>Até 12x sem juros</p>
                 <button>Deletar produto</button>
             </div>  
         
      
        </div>
        )
        
    }
    
 }
 
 export default ProdutosCard