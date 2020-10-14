import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { clearSearch, fetchOneProduct, postReview } from "../../store/actions/products";

const ReviewForm = ({ userId, foundProduct, clearSearch, fetchOneProduct, postReview }) => {
	let { id } = useParams();
	let history = useHistory();

	React.useEffect(() => {
		if (!foundProduct) {
			fetchOneProduct(id);
		}
		return () => {
			clearSearch();
		};
	}, []);

	const [data, updateData] = React.useState({
		title: "",
		score: "",
		content: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		postReview(id, userId, data);
		history.push(`/products/${id}`);
	}

	function handleChange(e) {
		updateData({ ...data, [e.target.name]: e.target.value });
	}

	return (
		<main id="review-form">
			<form onSubmit={handleSubmit}>
				<h2>Review Form</h2>
				{foundProduct && <h3>{foundProduct.name}</h3>}
				<div>
					<label htmlFor="title">Review Title</label>
					<input
						placeholder="review title"
						value={data.title}
						onChange={handleChange}
						type="text"
						name="title"
						id="title"
					></input>
				</div>
				<div>
					{/* To change to radios */}
					<label htmlFor="score">Review Score</label>
					<input
						placeholder="0"
						value={data.score}
						onChange={handleChange}
						type="number"
						name="score"
						id="score"
					></input>
				</div>
				<div>
					<label htmlFor="content">Review Content</label>
					<input
						placeholder="review content"
						value={data.content}
						onChange={handleChange}
						type="text"
						name="content"
						id="content"
					></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
};

function mapStateToProps(state) {
	return {
		userId: state.currentUser.user.id,
		foundProduct: state.products.search[0],
	};
}

export default connect(mapStateToProps, { clearSearch, fetchOneProduct, postReview })(
	ReviewForm
);
