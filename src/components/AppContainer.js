import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import SideColumn from './SideColumn/SideColumn'
import AddProduct from './AddProduct/AddProduct'

export class AppContainer extends Component {
	state={
		openPageAddProduto:false
	}
	addProduto = () => {
		this.setState({openPageAddProduto:!this.state.openPageAddProduto})
	}
  render() {
  	let AddProduto = ''
  	if(this.state.openPageAddProduto === true){
  		AddProduto = <AddProduct addProduto={this.addProduto}/>
  	}
    return (
      <div>
        <NavBar addProduto={this.addProduto}/>
        {AddProduto}
        <SideColumn/>
      </div>
    )
  }
}
