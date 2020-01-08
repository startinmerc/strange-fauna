import React, { Component } from 'react';
import AddToCart from './AddToCart';
import seeds, { categories } from '../../seeds';
import { useParams,	Link } from "react-router-dom";

function ProductDetail() {
	let { id } = useParams();
	const item = seeds.products.find(item=>(item.id === Number(id)));
	const cat = categories.find(cat=>(item.type === cat.section));
	return (
		<main id={`details details-${item.id}`}>
			<h3>
				<Link to="/">Home</Link> / <Link to={`/products/${cat.title}`}>{cat.title}</Link>
			</h3>
			<div className="boxes" style={{gridTemplateColumns: 'auto 1fr'}}>
				<div className="box box-image" style={{textAlign: 'left'}}>
					<img src={item.photos[0]} alt="product"/>
				</div>
				<div className="box box-text" style={{paddingTop: 0}}>
					<h2 style={{marginTop: 0}}>{item.name}</h2>
					<h3>${item.price}</h3>
					<p>{item.description}</p>
					<label htmlFor="quantity">Quantity:</label><br/>
					<button type="button" name="removeQty" className="btn-quantity btn-quantity-remove">-</button>
					<input type="number" name="quantity" id="quantity" placeholder="1"/>
					<button type="button" name="addQty" className="btn-quantity btn-quantity-add">+</button>
					<AddToCart/>
					(AddToWish)
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th colSpan="3">Reviews</th>
							</tr>
						</thead>
						<tbody>
							{item.reviews.map((review,i) => (
								<tr key={`review-${i}`}>
									<td>{review.score}</td>
									<td>{review.author}</td>
									<td>{review.content}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}

export default ProductDetail;
