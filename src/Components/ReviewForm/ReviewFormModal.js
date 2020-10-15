import React from "react";
import { connect } from "react-redux";
import { postReview } from "../../store/actions/products";

const ReviewForm = ({ userId, postReview, id }) => {
	const [data, updateData] = React.useState({
		title: "",
		score: "",
		content: "",
	});

	const [showForm, updateShowForm] = React.useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		postReview(id, userId, data);
		updateShowForm(false);
	}

	function handleChange(e) {
		updateData({ ...data, [e.target.name]: e.target.value });
	}

	return (
		<div id="review-form">
			<button onClick={() => updateShowForm(!showForm)}>
				{showForm ? "Hide form" : "Add a review"}
			</button>
			{showForm && (
				<form onSubmit={handleSubmit}>
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

export default connect(mapStateToProps, { postReview })(ReviewForm);
