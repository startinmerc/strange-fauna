import React from "react";
import dayjs from "dayjs";
import Star from "../SVGs/Star";
import { connect } from "react-redux";
import { deleteReview } from "../../store/actions/products";

function Review({ i, review, currentUser, deleteReview }) {
	function handleRemove() {
		deleteReview(review.user._id, review._id);
	}

	return (
		<li key={`review-${i}`} className="review">
			<h3>
				<span className="review__rating">
					<span className="sr-only">{review.score} out of 5</span>
					<Star size={17} fill={true} />
					<Star size={17} fill={review.score > 1} />
					<Star size={17} fill={review.score > 2} />
					<Star size={17} fill={review.score > 3} />
					<Star size={17} fill={review.score > 4} />
				</span>
				<span className="review__title">{review.title}</span>
			</h3>
			<small className="review__author">
				by {review.user.username} on{" "}
				{dayjs(review.createdAt).format("DD/MM/YYYY")}
			</small>
			<p className="review__text">{review.content}</p>
			{review.user._id === currentUser.user.id ? (
				<button onClick={handleRemove}>Delete Review</button>
			) : null}
		</li>
	);
}

export default connect(null, { deleteReview })(Review);
