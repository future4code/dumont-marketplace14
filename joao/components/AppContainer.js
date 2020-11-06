import React, { Component } from 'react'
import Produto from './Produtos/Produtos'
import Footer from './Footer/Footer'

 export class AppContainer extends Component {
  render() {
    return (
      <div>
       
           <Produto/>   
          
            <Footer/>
          
             </div>
      
    )
  }
}