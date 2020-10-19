import React from "react";
import AddToCart from "../ProductCard/AddToCart";
import AddToWish from "../ProductCard/AddToWish";
import Star from "../SVGs/Star";
import { useParams, Link } from "react-router-dom";
import { editCart } from "../../store/actions/cart";
import { clearSearch, fetchOneProduct } from "../../store/actions/products";
import { connect } from "react-redux";
import "./ProductDetail.css";
import Review from "../Review/Review";
import ReviewFormModal from "../ReviewForm/ReviewFormModal";

// Expects no props,
// Returns full product detail page

function ProductDetail({
	cart,
	clearSearch,
	fetchOneProduct,
	foundProduct,
	editCart,
	errors,
	currentUser,
}) {
	// get product id from url
	let { id } = useParams();

	// Pop item from ID on load
	React.useEffect(() => {
		clearSearch();
		fetchOneProduct(id);
		return () => {
			clearSearch();
		};
	}, [id, clearSearch, fetchOneProduct]);

	// States
	// Set quantity
	const [qty, setQty] = React.useState(1);
	// Ref
	let header = React.createRef();

	// update quantity in cart on click
	function handleClick(e) {
		editCart(foundProduct._id, qty);
	}

	// update quantity on input change
	function handleChange(e) {
		setQty(Number(e.target.value));
	}

	function getAverageReview(reviews) {
		let num = 0,
			length = reviews.length;
		reviews.forEach((v) => {
			num += v.score;
		});
		return num / length;
	}

	if (foundProduct) {
		const {
			photos,
			price,
			name,
			description,
			stock,
			_id,
			reviews,
			type,
		} = foundProduct;

		var avgReview = reviews.length < 1 ? "" : getAverageReview(reviews);
		var leftReview =
			reviews.filter((v) => v._id === currentUser.user.id).length <
			reviews.length;

		return (
			<main id="details">
				<h3>
					<Link to="/">Home</Link> /{" "}
					<Link to={`/products/${type.title}`}>{type.title}</Link>
				</h3>
				<div className="boxes">
					<div className="box box__image">
						<img
							src={photos[0]}
							style={{ width: "100%", height: "auto" }}
							alt="product"
						/>
					</div>
					<div className="box box__text" style={{ paddingTop: 0 }}>
						<h2 ref={header} style={{ marginTop: 0 }}>
							{name}
						</h2>
						<h3>${price}</h3>
						<p>{description}</p>
						<p>Currently {stock} in stock</p>
						<label htmlFor="quantity">Quantity:</label>
						<input
							type="number"
							name="quantity"
							id="quantity"
							value={qty}
							className="quantity"
							onChange={handleChange}
							disabled={
								stock < 1 && !cart.includes(foundProduct._id)
									? "disabled"
									: null
							}
							min="1"
							max={stock}
						/>
						&nbsp;
						{/*render quantity update if product in cart*/}
						{cart.includes(foundProduct._id) ? (
							<button onClick={handleClick} style={{ marginTop: 0 }}>
								Update Quantity
							</button>
						) : null}
						<br />
						<AddToCart
							id={_id}
							qty={Number(qty)}
							stk={Number(stock)}
							price={Number(price)}
							classes="button--large button--wide button--details"
						/>
						<br />
						<AddToWish id={_id} button classes="button--wide button--details" />
					</div>
				</div>

				<div className="reviews__header">
					<h3>Customer Reviews</h3>
					{currentUser.isAuthenticated && !leftReview && (
						<ReviewFormModal id={_id} modal={true} />
					)}
					<p>
						<Star size={20} fill={true} />
						<Star size={20} fill={avgReview > 1.5} />
						<Star size={20} fill={avgReview > 2.5} />
						<Star size={20} fill={avgReview > 3.5} />
						<Star size={20} fill={avgReview > 4.5} />
						&nbsp;<small>({avgReview || 0})/5</small>
						<br />
						from {reviews.length} reviews
					</p>
				</div>
				<ul className="reviews">
					{reviews.map((review) => (
						<Review
							review={review}
							currentUser={currentUser}
							key={`review-${review._id}`}
						/>
					))}
				</ul>
			</main>
		);
	} else {
		return (
			<main id="details">
				<h3>
					<Link to="/">Home</Link>
				</h3>
				<div className="errors">
					Error: <br /> {errors.message}
				</div>
				<p style={{ textAlign: "center" }}>Product Not Found</p>
			</main>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		// reduce cart item objects to array of ids
		cart: reduxState.cart.cart.map((v) => v.id),
		foundProduct: reduxState.products.search,
		errors: reduxState.errors,
		currentUser: reduxState.currentUser,
	};
}

export default connect(mapStateToProps, {
	editCart,
	clearSearch,
	fetchOneProduct,
})(ProductDetail);
