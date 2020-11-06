import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import SideColumn from './SideColumn/SideColumn'
import Footer from './Footer/Footer'
import Produtos from './Produtos/Produtos'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SideColumn/>
        <Produtos/>
        <Footer/>

      </div>
    )
  }
}
