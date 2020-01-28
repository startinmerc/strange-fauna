import React from 'react';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import seeds, { categories } from '../../seeds';
import { useParams,	Link } from "react-router-dom";
import { editCart } from '../../store/actions/cart';
import { connect } from 'react-redux';

// Expects no props,
// Returns full product detail page

function ProductDetail(props) {
	// get product id from url
	let { id } = useParams();
	// retrieve product info using middleware
	const item = seeds.products.find(item=>(item.id === Number(id)));
	// find relevant category title based on item type
	const cat = categories.find(cat=>(item.type === cat.section));
	// Hook to set quantity and reducer
	const [qty, setQty] = React.useState(1);

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
					 placeholder={qty} className="quantity" onChange={handleChange}
					 min="1"/>
					{/*render quantity update if product in cart*/}
					{props.cart.includes(item.id) ? 
						<button onClick={handleClick}>Update Quantity</button>
						 : null}
					<AddToCart id={item.id} qty={qty}/>
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

function mapStateToProps(reduxState){
	return {
		// reduce cart item objects to array of ids
		cart: reduxState.cart.cart.map((v)=>(v.id))
	}
}


export default connect(mapStateToProps, { editCart })(ProductDetail);
