import React from 'react'

class NavBar extends React.Component{
	render(){
		return(
			<div>
				<div>LOGO</div>
				<div>
					<select>
						<option>Produtos</option>
					</select>
					<input />
					<button>Buscar</button>
				</div>
				<div>
					<button>Add Produto</button>
					<button>Entrar</button>
				</div>
			</div>
		)
	}
}
export default NavBar