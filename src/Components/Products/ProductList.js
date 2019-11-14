import React, {Component} from 'react';
import ProductCard from './ProductCard';

const ProductsObj = [
	{
		id: 0,
		name: "product one",
		type: "mushroom",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/400"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 1,
		name: "product two",
		type: "berry",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/400"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 2,
		name: "product three",
		type: "flower",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/400"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 3,
		name: "product four",
		type: "reduction",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/400"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	}
];

class ProductList extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: ProductsObj
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
				<h1>Hi There! {this.props.type}!</h1>
				<div style={style}>
					{renderList}
				</div>
			</main>
		)
	}
}

export default ProductList;