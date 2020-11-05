import React from 'react'
import BannerLateral from './BannerLateral.jpg'

class SideColumn extends React.Component{
	render(){
		return(
			<div>
				<div>
					<h3>Categorias</h3>
					<div>Acessórios</div>
					<div>Aniversário e Festas</div>
					<div>Bebê</div>
					<div>Bijuterias</div>
					<div>Bolsas e Carteiras</div>
					<div>Casa</div>
					<div>Casamento</div>
					<div>Convites</div>
					<div>Decoração</div>
					<div>Doces</div>
					<div>Eco</div>
					<div>Infantil</div>
					<div>Jogos e Brinquedos</div>
					<div>Jóias</div>
					<div>Lembrancinhas</div>
					<div>Papel e Cia</div>
					<div>Pets</div>
				</div>
				<div>
					<h3>Materiais de Artesanato</h3>
					<div>Bijuterias e acessórios</div>
					<div>Papel e scrapbooking</div>
					<div>Patchwork e costura</div>
					<div>Ver Todos</div>
					<img src={BannerLateral}/>
				</div>
			</div>
		)
	}
}
export default SideColumn