import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import seeds, { categories } from '../../seeds';
import { useParams,	Link } from "react-router-dom";

function ProductDetail() {
	let { id } = useParams();
	const item = seeds.products.find(item=>(item.id === Number(id)));
	const cat = categories.find(cat=>(item.type === cat.section));
	return (
		<main id="details">
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
					<label htmlFor="quantity">Quantity:</label>
					<input type="number" name="quantity" id="quantity"
					 placeholder="1" className="quantity"/>
					<AddToCart id={item.id}/>
					<AddToWish id={item.id} button/>
				</div>
			</div>
			<table className="reviews-table">
				<colgroup>
					<col span="1" style={{width: "15%"}}/>
					<col span="1" style={{width: "15%"}}/>
					<col span="1" style={{width: "auto"}}/>
				</colgroup>
				<thead>
					<tr>
						<th colSpan="3"><h3>Reviews</h3></th>
					</tr>
					<tr>
						<th>Rating</th>
						<th>Author</th>
						<th>Review</th>
					</tr>
				</thead>
				<tbody>
					{item.reviews.map((review,i) => (
						<tr key={`review-${i}`} className="review">
							<td>{review.score}/5</td>
							<td>{review.author}</td>
							<td>{review.content}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

export default ProductDetail;
