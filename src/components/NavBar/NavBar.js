import React from 'react'
import './NavBar.css'
import Logo from './logo.png'
import Search from './search.svg'

class NavBar extends React.Component{
	render(){
		return(
			<header>
				<div>
					<img src={Logo} alt='Logo'/>
				</div>
				<div>
					<select>
						<option>Produtos</option>
					</select>
					<input />
					<button className='search'><img src={Search}/></button>
				</div>
				<div>
					<button className="addProduto" onClick={this.props.addProduto}>Add Produto</button>
					<button className="entrar" >Entrar</button>
				</div>
			</header>
		)
	}
}
export default NavBar