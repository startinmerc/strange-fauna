import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import Star from '../SVGs/Star';
import { useParams,	Link } from "react-router-dom";
import { editCart } from '../../store/actions/cart';
import { clearSearch, fetchOneProduct } from "../../store/actions/products";
import { connect } from 'react-redux';

// Expects no props,
// Returns full product detail page

function ProductDetail({categories, cart, clearSearch, fetchOneProduct, foundProduct, editCart}) {
	// get product id from url
	let { id } = useParams();

	// Pop item from ID on load
	React.useEffect(()=>{
		clearSearch();
		fetchOneProduct(id);
		return ()=>{clearSearch()};
	},[id, clearSearch, fetchOneProduct])

	// States
	// Set quantity
	const [qty, setQty] = React.useState(1);
	// Ref
	let header = React.createRef();

	// update quantity in cart on click
	function handleClick(e){
		editCart(foundProduct._id, qty);
	}

	// update quantity on input change
	function handleChange(e){
		setQty(Number(e.target.value));
	}

	if(foundProduct){
		const {
			photos,
			price,
			name,
			description,
			stock,
			_id,
			reviews,
			type
		} = foundProduct;

		var avgReview = "";

		return (
			<main id="details">
				<h3>
					<Link to="/">Home</Link> / <Link to={`/products/${type.title}`}>{type.title}</Link>
				</h3>
				<div className="boxes">
					<div className="box box__image">
						<img src={photos[0]}  style={{width: '100%', height: 'auto'}} alt="product"/>
					</div>
					<div className="box box__text" style={{paddingTop: 0}}>
						<h2 ref={header} style={{marginTop: 0}}>{name}</h2>
						<h3>${price}</h3>
						<p>{description}</p>
						<p>Currently {stock} in stock</p>
						<label htmlFor="quantity">Quantity:</label>
						<input type="number" name="quantity" id="quantity"
						 value={qty} className="quantity" onChange={handleChange}
						 disabled={stock < 1 && !cart.includes(foundProduct._id) ? "disabled" : null}
						 min="1" max={stock}/>
						&nbsp;
						{/*render quantity update if product in cart*/}
						{cart.includes(foundProduct._id) ? 
							<button onClick={handleClick} style={{marginTop: 0}}>Update Quantity</button>
							 : null}
						<br/><AddToCart id={_id} qty={qty} stk={stock} price={price}/>
						<br/><AddToWish id={_id} button/>
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
						from {reviews.length} reviews
					</p>
				</div>
				<ul className="reviews">
					{reviews.map((review,i) => (
						<li key={`review-${i}`} className="review">
							<h3>
								<span className="review__rating">
									<span className="sr-only">{review.score} out of 5</span>
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
		)
	} else {
		return (
			<main id="details">
				<h3>
					<Link to="/">Home</Link>
				</h3>
				<div className="boxes">
					<div className="box box__text" style={{paddingTop: 0}}>
						Product Not Found
					</div>
				</div>
			</main>
		);
	}

};

function mapStateToProps(reduxState){
	return {
		// reduce cart item objects to array of ids
		cart: reduxState.cart.cart.map((v)=>(v.id)),
		categories: reduxState.categories,
		foundProduct: reduxState.products.search[0]
	};
};

export default connect(mapStateToProps, { editCart, clearSearch, fetchOneProduct })(ProductDetail);
