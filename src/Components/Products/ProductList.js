import React, {Component} from 'react';
import ProductCard from './ProductCard';
import seeds from '../../seeds';
import './ProductList.css';

// Expects 'type' string as prop, either all or product category
// Returns main element with grid display option & products

class ProductList extends Component {

	constructor(props){
		super(props);
		this.state = {
			products: seeds.products,
			gridColumns: "1fr 1fr 1fr"
		}
	}

	componentDidMount(){
		if(window.innerWidth < 600){
			this.setState({gridColumns: "1fr 1fr"});
		}
	}
	
	render(){
		document.title = `Showing ${this.props.type} products`;

		var list = this.state.products;
		if(this.props.type!=="all"){
			list = list.filter((p)=>{
				return p.type === this.props.type
			})
		}

		var renderList = list.map((prod)=>{return <ProductCard detail={prod} key={`prod-${prod.id}`}/>});
		
		return (
			<main>
				<div className="product-list-header">
					<h2>Showing {this.props.type} products</h2>
					<div className="grid-button-container">
						Select columns: 
						<button className="grid-button" onClick={()=>this.setState({gridColumns: "1fr"})}>1</button>
						<button className="grid-button" onClick={()=>this.setState({gridColumns: "1fr 1fr"})}>2</button>
						<button className="grid-button" onClick={()=>this.setState({gridColumns: "1fr 1fr 1fr"})}>3</button>
						<button className="grid-button" onClick={()=>this.setState({gridColumns: "1fr 1fr 1fr 1fr"})}>4</button>
					</div>
				</div>
				<div className="product-list" style={{gridTemplateColumns: this.state.gridColumns}}>
					{renderList}
				</div>
			</main>
		)
	}
}

export default ProductList;