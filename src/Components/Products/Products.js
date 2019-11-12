import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const ProductsObj = [
	{
		id: 0,
		name: "product one",
		type: "mushroom",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/200"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 1,
		name: "product two",
		type: "berry",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/200"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 2,
		name: "product three",
		type: "flower",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/200"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	},
	{
		id: 3,
		name: "product four",
		type: "reduction",
		description: "description ipsum flooby blup blup, isn't it? yeah.",
		photos: ["https://picsum.photos/200"],
		reviews: [{score: 2, author: "nick", content: "review content"}],
		price: 5
	}
];

function ProductCard({detail}){
	return (
		<div id={`product-${detail.id}`}>
			<h5>{detail.name}</h5>
			<img src={detail.photos[0]} alt={detail.name}/>
			<p>{detail.type}</p>
			<p><Link to={`/products/${detail.id}`}>Learn More</Link></p>
		</div>
	)
}

class ProductList extends Component {
	render(){
		var list = ProductsObj;
		if(this.props.type!=="all"){
			list = list.filter((p)=>{
				return p.type === this.props.type
			})
		}
		var renderList = list.map((prod)=>{return <ProductCard detail={prod}/>});
		return (
			<div>
				<h1>Hi There! {this.props.type}!</h1>
				{renderList}
			</div>
		)
	}
}

function Products(){
	let match = useRouteMatch();
	return (
		<Switch>
			<Route path={`${match.url}/all`}>
				<ProductList type="all"/>
			</Route>
			<Route path={`${match.url}/mushrooms`}>
				<ProductList type="mushroom"/>
			</Route>
			<Route path={`${match.url}/berries`}>
				<ProductList type="berry"/>
			</Route>
			<Route path={`${match.url}/flowers`}>
				<ProductList type="flower"/>
			</Route>
			<Route path={`${match.url}/reductions`}>
				<ProductList type="reduction"/>
			</Route>
			<Route path={`${match.url}/`}>
				<ProductList type="all"/>
			</Route>
		</Switch>
	);
};

export default Products;