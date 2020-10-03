import React from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../services/api";

// Expects item object with product data, and remove function
// Returns styled li with bound remove function & link to product detail

const MiniCartItem = ({ item, remove, type }) => {
	const [foundItem, updateItem] = React.useState({
		type: "",
		_id: "",
		price: "",
		qty: "",
		photos: "",
	});

	React.useEffect(() => {
		async function popItem(id) {
			await apiCall("get", `/api/products/${id}`)
				.then((res) => updateItem(res))
				.catch((err) => console.log(err));
		}
		if (type === "Cart") {
			popItem(item.id);
		} else {
			popItem(item);
		}
	}, [item, type]);

	function handleClick() {
		if (type === "Cart") {
			remove(item.id, type);
		} else {
			remove(item, type);
		}
	}

	return (
		<li
			className="mini-cart__item"
			style={{
				// Background color based on product type
				backgroundColor: foundItem.type.color,
				background: `linear-gradient(90deg, var(--header) 5%, ${foundItem.type.color} 50%)`,
			}}
		>
			<div className="mini-cart__item-text">
				<p className="display">
					<Link to={`/products/${item.id}`}>{foundItem.name}</Link>
				</p>
				<p>
					${foundItem.price}
					{type === "Cart" ? `x ${item.qty}` : null}
				</p>
				<p>
					<button onClick={handleClick}>Remove</button>
				</p>
			</div>
			<img className="mini-cart__item-image" src={foundItem.photos[0]} alt="" />
		</li>
	);
};

export default MiniCartItem;
