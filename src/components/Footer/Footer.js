import React from 'react'
import './Footer.css'
import CJM from './CJM.png'
import card1 from './bi_credit-card-2-back-fill.png'
import card2 from './bi_credit-card-2-back-fill-1.png'
import card3 from './bi_credit-card-2-back-fill-2.png'
import card4 from './bi_credit-card-2-back-fill-3.png'
  class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <ul>
      <li className ="news">Newsletter<br/>
        <input type = 'text'/>
        <button className = "botao">Enviar</button></li>
        
        <li >Formas de pagamento 
          <img className = 'cd1' src={card1 } alt = 'cartão'/>
           </li>
         
       
        <li><img src={CJM} alt = 'parceiros'/></li>

        

      </ul>
      </div>

    )
  }
}
export default Footer