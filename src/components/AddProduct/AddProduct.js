import React from 'react'
import AddImage from './AddImage'
import axios from 'axios'
import './AddProduct.css'


const url = 'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products'

class AddProduct extends React.Component{
	state = {
	name: '',
    description: '',
    price: '',
    paymentMethod: 'Cartão',
    category: '',
    photos: [],
    installments: '',
    photo1:'',
    photo2:'',
    photo3:'',
    photo4:''
	}

	

	/*On changes Inputs controlados*/
	nomeProduto = (event) => {
		this.setState({name:event.target.value})
	}
	descricaoProduto = (event) => {
		this.setState({description:event.target.value})
	}
	precoProduto = (event) => {
		this.setState({price:event.target.value})
	}
	categoriaProduto = (event) => {
		this.setState({category:event.target.value})
	}
	formaPagamento = (event) => {
		let select = event.target;
		let option = select.options[select.selectedIndex].value;
		this.setState({paymentMethod:option})
	}
	
	fotoProduto1 = (event) => {
		this.setState({photo1:event.target.value})
	}
	fotoProduto2 = (event) => {
		this.setState({photo2:event.target.value})
	}
	fotoProduto3 = (event) => {
		this.setState({photo3:event.target.value})
	}
	fotoProduto4 = (event) => {
		this.setState({photo4:event.target.value})
	}
	parcelaProduto = (event) => {
		this.setState({installments:event.target.value})
	}

	//Criar produto na API
	criarProduto = () => {
		let arrayPhotos = []
		arrayPhotos.push(this.state.photo1)
		arrayPhotos.push(this.state.photo2)
		arrayPhotos.push(this.state.photo3)
		arrayPhotos.push(this.state.photo4)

		const body = {
			name: this.state.name,
		    description:  this.state.description,
		    price: this.state.price,
		    paymentMethod: this.state.paymentMethod,
		    category:  this.state.category,
		    photos: arrayPhotos,
		    installments: this.state.installments
		}
		console.log(body)
		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products',body).then((resposta) => {
			alert('Produto salvo com sucesso')
			console.log('resposta-> ', resposta)
		}).catch((error) => {
			alert('certifique-se que você preencheu todos os dados, você precisa enviar ao menos uma imagem !')
			console.log('Erro -> ', error)
		})
		this.setState({
			name: '',
		    description: '',
		    price: '',
		    paymentMethod: 'Cartão',
		    category: '',
		    photos: [],
		    installments: '',
		    photo1:'',
		    photo2:'',
		    photo3:'',
		    photo4:''
		})
	}

	render(){
		return(
			<div className="general">
			<div className='fechar'>
				<span onClick={this.props.addProduto}>X</span>
			</div>
			
				<div className="AddProduct">
					<h2>Adcione seu produto ao marketPlace Elo4</h2>
					<div className="item name">
						<label>Nome do Produto</label>
						<input type='text' value={this.state.name} onChange={this.nomeProduto}/>
					</div>
					<div className="item description">
						<label>Descrição</label>
						<textarea value={this.state.description} onChange={this.descricaoProduto}></textarea>
					</div>
					<div className="item price">
						<label>Preço</label>
						<input type="number" value={this.state.price} onChange={this.precoProduto}/>
					</div>
					<div className="item parcelas">
						<label>Parcelas</label>
						<input type="number" value={this.state.installments} onChange={this.parcelaProduto}/>
					</div>
					<div className="item paymentMethod">
					<label>Forma de Pagamento</label>
						<select onChange={this.formaPagamento}>
							<option>Cartão</option>
							<option>Dinheiro</option>
							<option>Cheque</option>
						</select>
					</div>
					<div className="item category">
						<label >Categoria</label>
						<input value={this.state.category} onChange={this.categoriaProduto}/>
					</div>
					<div className="item image1">
						<label>Url da primeira Imagem</label>
						<input value={this.state.photo1} onChange={this.fotoProduto1}/>
					</div>
					<div className="item image2">
						<label>Url da segunda Imagem</label>
						<input value={this.state.photo2} onChange={this.fotoProduto2}/>
					</div>
					<div className="item image3">
						<label>Url da terceira Imagem</label>
						<input value={this.state.photo3} onChange={this.fotoProduto3}/>
					</div>
					<div className="item image4">
						<label>Url da quarta Imagem</label>
						<input value={this.state.photo4} onChange={this.fotoProduto4}/>
					</div>
					<div className="item button">
						<button onClick={this.criarProduto}>Salvar</button>
					</div>
				</div>
			</div>
		)
	}
}

export default AddProduct