import React, {Component} from 'react';
import ProductCard from './ProductCard';
import seeds from '../../seeds';
import './ProductList.css';

class ProductList extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: seeds,
			gridColumns: "1fr 1fr 1fr"
		}
	}
	render(){
		var list = this.state.products;
		if(this.props.type!=="all"){
			list = list.filter((p)=>{
				return p.type === this.props.type
			})
		}
		var renderList = list.map((prod)=>{return <ProductCard detail={prod} key={`prod-${prod.id}`}/>});
		return (
			<main>
				<h2>Showing {this.props.type} products</h2>
				<button onClick={()=>this.setState({gridColumns: "1fr 1fr 1fr"})}>3x</button>
				<button onClick={()=>this.setState({gridColumns: "1fr 1fr 1fr 1fr"})}>4x</button>
				<div className="product-list" style={{gridTemplateColumns: this.state.gridColumns}}>
					{renderList}
				</div>
			</main>
		)
	}
}

export default ProductList;