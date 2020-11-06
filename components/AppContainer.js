import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import SideColumn from './SideColumn/SideColumn'
import ProdutosCard from './Produtos/Produtos'
import Footer from './Footer/Footer'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div>ue</div>
        <SideColumn/>
        <ProdutosCard/>  
        <Footer/>
      </div>
    )
  }
}
