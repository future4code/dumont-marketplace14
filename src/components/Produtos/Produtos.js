import React from 'react'
import './Produtos.css'
import image2 from './image2.png'
import picture from './imagem.png'
import axios from 'axios'


 class ProdutosCard extends React.Component {
    state={
        listadeprodutos:[]
    }
    componentDidMount(){
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products').then((resposta) => {
            this.setState({listadeprodutos:resposta.data.products})
        }).catch((error) => {
            console.log('erro -> ',error)
        })
    }
    deleteProduct = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products/${id}`).then((res) => {
            alert("Produto deletado com sucesso !")
        }).catch((err) => {
            console.log('erro ->',err)
        })
    }
    componentDidUpdate(){
         axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products').then((resposta) => {
            this.setState({listadeprodutos:resposta.data.products})
        }).catch((error) => {
            console.log('erro -> ',error)
        })
    }
    render()
    {
            let produtosList = []
            let photoDoProduto = []
    produtosList = this.state.listadeprodutos.map((produto) => {
        photoDoProduto = produto.photos.map((photo) => {
            return <img src={photo}/> 
        })
        return(
            <div key={Date.now()}  className="produto">
               <div className="imgProduto">
                     {photoDoProduto[0]}
                </div>
                 <h2>{produto.name}   <span>{produto.category}</span></h2>
                 <h3>R${produto.price}</h3>
                 <p>{produto.description}</p>
                 <p>{produto.installments} x no {produto.paymentMethod}</p>
                 <button onClick={() => this.deleteProduct(produto.id)}>Deletar produto</button>
             </div>
        )
    })
        return(
            <div className="produtos">
                 <div>
                      <img src={image2} alt='imagem'/>
                      <h1>Meus produtos Adcionados </h1>
                </div>
                 {produtosList}  
             </div>
        )
        
    }
    
 }
 
 export default ProdutosCard