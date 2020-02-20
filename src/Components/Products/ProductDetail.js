import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import Star from '../SVGs/Star';
import { categories } from '../../seeds';
import { useParams,	Link } from "react-router-dom";
import { editCart } from '../../store/actions/cart';
import { connect } from 'react-redux';
import { getItem, updateStock } from '../../middleware';

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
	// find if in cart
	const inCart = props.cart.includes(Number(id));
	// update quantity on input change
	function handleChange(e){
		setQty(e.target.value);
	}

	// update quantity in cart on click
	function handleClick(e){
		updateStock(item.id, qty);
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
					<p>Currently {item.stock} in stock</p>
					<label htmlFor="quantity">Quantity:</label>
					<input type="number" name="quantity" id="quantity"
					 value={qty} className="quantity" onChange={handleChange}
					 disabled={item.stock < 1 && !inCart ? "disabled" : null}
					 min="1" max={item.stock}/>
					&nbsp;
					{/*render quantity update if product in cart*/}
					{props.cart.includes(item.id) ? 
						<button onClick={handleClick}>Update Quantity</button>
						 : null}
					<br/><AddToCart id={item.id} qty={qty} stk={item.stock}/>
					<br/><AddToWish id={item.id} button/>
				</div>
			</div>

			<div className="reviews__header">
				<h3>Customer Reviews</h3>
				<p>
					<Star size='20px' fill="var(--primary)"/>
					<Star size='20px' fill={avgReview > 1.5 ? 'var(--primary)' : 'none'}/>
					<Star size='20px' fill={avgReview > 2.5 ? 'var(--primary)' : 'none'}/>
					<Star size='20px' fill={avgReview > 3.5 ? 'var(--primary)' : 'none'}/>
					<Star size='20px' fill={avgReview > 4.5 ? 'var(--primary)' : 'none'}/>
					&nbsp;<small>({avgReview})/5</small><br/>
					from {item.reviews.length} reviews
				</p>
			</div>
			<ul className="reviews">
				{item.reviews.map((review,i) => (
					<li key={`review-${i}`} className="review">
						<h3>
							<span className="review__rating">
								<Star size='17px' fill="var(--primary)"/>
								<Star size='17px' fill={review.score > 1 ? 'var(--primary)' : 'none'}/>
								<Star size='17px' fill={review.score > 2 ? 'var(--primary)' : 'none'}/>
								<Star size='17px' fill={review.score > 3 ? 'var(--primary)' : 'none'}/>
								<Star size='17px' fill={review.score > 4 ? 'var(--primary)' : 'none'}/>
							</span>
							<span className="review__title">{review.title}</span>
						</h3>
						<small className="review__author">by {review.author} on 01/01/01</small>
						<p className="review__text">{review.content}</p>
					</li>
				))}
			</ul>
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
