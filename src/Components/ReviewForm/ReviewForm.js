import React from "react";
import { connect } from "react-redux";
import Star from "../SVGs/Star";
import { propTypeMongoId } from "../../middleware";
import { useParams, useHistory } from "react-router-dom";
import {
	clearSearch,
	fetchOneProduct,
	postReview,
} from "../../store/actions/products";
import "./ReviewForm.css";

const ReviewFormRedux = ({
	userId,
	postReview,
	productId,
	foundProduct,
	clearSearch,
	fetchOneProduct,
	fullPage = false,
}) => {
	React.useEffect(() => {
		if (!foundProduct && fullPage) {
      fetchOneProduct(id);
      updateShowForm(true);
		}
		return () => {
			clearSearch();
		};
	}, []);

	const [data, updateData] = React.useState({
		title: "",
		score: 0,
		content: "",
	});

	const [showForm, updateShowForm] = React.useState(false);

	let { id } = useParams() || null;
	let history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		if (fullPage) {
			postReview(id, userId, data);
			history.push(`/products/${id}`);
		} else {
			postReview(productId, userId, data);
			updateShowForm(false);
		}
	}

	function handleChange(e) {
		updateData({ ...data, [e.target.name]: e.target.value });
	}

	return (
		<div id="review-form">
			{fullPage && (
				<>
					<h2>Review Form</h2>
					<h3>{foundProduct && foundProduct.name}</h3>
				</>
			)}
			{!fullPage && (
				<button onClick={() => updateShowForm(!showForm)}>
					{showForm ? "Hide form" : "Add a review"}
				</button>
			)}
			{showForm && (
				<form onSubmit={handleSubmit}>
					<div className="review-form__section">
						<label htmlFor="score">Review Score:</label>
						<div>
							<label className="radio--star">
								<input
									type="radio"
									name="score"
									value={1}
									checked={data.score === "1"}
									onChange={handleChange}
								/>
								<Star size={20} fill={data.score >= 1} />
							</label>
							<label className="radio--star">
								<input
									type="radio"
									name="score"
									value={2}
									checked={data.score === "2"}
									onChange={handleChange}
								/>
								<Star size={20} fill={data.score >= 2} />
							</label>
							<label className="radio--star">
								<input
									type="radio"
									name="score"
									value={3}
									checked={data.score === "3"}
									onChange={handleChange}
								/>
								<Star size={20} fill={data.score >= 3} />
							</label>
							<label className="radio--star">
								<input
									type="radio"
									name="score"
									value={4}
									checked={data.score === "4"}
									onChange={handleChange}
								/>
								<Star size={20} fill={data.score >= 4} />
							</label>
							<label className="radio--star">
								<input
									type="radio"
									name="score"
									value={5}
									checked={data.score === "5"}
									onChange={handleChange}
								/>
								<Star size={20} fill={data.score >= 5} />
							</label>
						</div>
						<label htmlFor="title" style={{ marginLeft: "5px" }}>
							Review Title:
						</label>
						<input
							placeholder="review title"
							value={data.title}
							onChange={handleChange}
							type="text"
							name="title"
							id="title"
						></input>
					</div>
					<div className="review-form__section">
						<label htmlFor="content">Review Content:</label>
						<input
							placeholder="review content"
							value={data.content}
							onChange={handleChange}
							type="text"
							name="content"
							id="content"
						></input>
					</div>
					<button type="submit" className="button--wide">
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		userId: state.currentUser.user.id,
		foundProduct: state.products.search,
	};
}

ReviewFormRedux.propTypes = {
	productId: function (props, propName, componentName) {
		propTypeMongoId(props, propName, componentName);
	},
};

export default connect(mapStateToProps, {
	clearSearch,
	fetchOneProduct,
	postReview,
})(ReviewFormRedux);
