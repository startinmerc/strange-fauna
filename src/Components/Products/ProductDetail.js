import React from 'react';
import seeds from '../../seeds';
import {
	useParams
} from "react-router-dom";

function ProductDetail() {
	let { id } = useParams();
	const item = seeds.products.find(item=>(item.id === Number(id)));
	return (
		<main>
			<h3>{item.name}</h3>
			<img src={item.photos[0]} alt="product"/>
			<h3>{item.price}</h3>
			<p>{item.description}</p>
			<table>
				<thead>
					<tr>
						<th colSpan="3">Reviews</th>
					</tr>
				</thead>
				<tbody>
					{item.reviews.map((review,i) => (
						<tr key={`review-${i}`}>
							<td>{review.score}</td>
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
