import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import Star from '../SVGs/Star';
import { categories } from '../../seeds';
import { useParams,	Link } from "react-router-dom";
import { editCart } from '../../store/actions/cart';
import { connect } from 'react-redux';
import { getItem } from '../../middleware';

// Expects no props,
// Returns full product detail page

function ProductDetail(props) {
	// get product id from url
	let { id } = useParams();
	// retrieve product info using middleware
	const item = getItem(id);
	// find relevant category title based on item type
	const cat = categories.find(cat=>(item.type === cat.section));
	// Hook to set quantity and reducer
	const [qty, setQty] = React.useState(item.qty || 1);
	// calculate average review
	const avgReview = ((item.reviews.reduce((acc,review)=>(acc+review.score),0))/item.reviews.length).toFixed(1)

	// update quantity on input change
	function handleChange(e){
		setQty(e.target.value);
	}

	// update quantity in cart on click
	function handleClick(e){
		props.editCart(item.id, qty);
	}

	return (
		<main id="details">
			<h3>
				<Link to="/">Home</Link> / <Link to={`/products/${cat.title}`}>{cat.title}</Link>
			</h3>
			<div className="boxes">
				<div className="box box__image">
					<img src={item.photos[0]}  style={{width: '100%', height: 'auto'}} alt="product"/>
				</div>
				<div className="box box__text" style={{paddingTop: 0}}>
					<h2 style={{marginTop: 0}}>{item.name}</h2>
					<h3>${item.price}</h3>
					<p>{item.description}</p>
					<label htmlFor="quantity">Quantity:</label>
					<input type="number" name="quantity" id="quantity"
					 value={qty} className="quantity" onChange={handleChange}
					 disabled={item.stock < 1 ? "disabled" : null}
					 min="1" max={item.stock}/>
					&nbsp;
					{/*render quantity update if product in cart*/}
					{props.cart.includes(item.id) ? 
						<button onClick={handleClick}>Update Quantity</button>
						 : null}
					&nbsp;Currently {item.stock} in stock
					<AddToCart id={item.id} qty={qty} stk={item.stock}/>
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
						<th colSpan="3">
							<h3>Customer Reviews</h3>
							<p>
								<Star size='1.3rem' fill="var(--black)"/>
								<Star size='1.3rem' fill={avgReview > 1.5 ? 'var(--black)' : 'none'}/>
								<Star size='1.3rem' fill={avgReview > 2.5 ? 'var(--black)' : 'none'}/>
								<Star size='1.3rem' fill={avgReview > 3.5 ? 'var(--black)' : 'none'}/>
								<Star size='1.3rem' fill={avgReview > 4.5 ? 'var(--black)' : 'none'}/>
								&nbsp;<small>({avgReview})/5</small><br/>
								from {item.reviews.length} reviews
							</p>
						</th>
					</tr>
					<tr style={{textAlign: "left"}}>
						<th style={{paddingLeft: "1.3rem"}}>Rating</th>
						<th style={{paddingLeft: "1.3rem"}}>Author</th>
						<th style={{paddingLeft: "1.3rem"}}>Review</th>
					</tr>
				</thead>
				<tbody>
					{item.reviews.map((review,i) => (
						<tr key={`review-${i}`} className="review">
							<td>
								<Star size='1rem' fill="var(--black)"/>
								<Star size='1rem' fill={review.score > 1 ? 'var(--black)' : 'none'}/>
								<Star size='1rem' fill={review.score > 2 ? 'var(--black)' : 'none'}/>
								<Star size='1rem' fill={review.score > 3 ? 'var(--black)' : 'none'}/>
								<Star size='1rem' fill={review.score > 4 ? 'var(--black)' : 'none'}/>
							</td>
							<td>{review.author}</td>
							<td>{review.content}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

function mapStateToProps(reduxState){
	return {
		// reduce cart item objects to array of ids
		cart: reduxState.cart.cart.map((v)=>(v.id))
	}
}


export default connect(mapStateToProps, { editCart })(ProductDetail);
