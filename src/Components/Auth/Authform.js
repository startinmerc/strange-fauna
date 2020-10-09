import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { removeError } from "../../store/actions/errors";
import { connect } from "react-redux";
import "./Authform.css";

const Authform = ({ history, type, onAuth, removeError }) => {
	React.useEffect(() => {
		return function cleanup() {
			removeError();
		};
	}, [removeError]);

	const [data, updateData] = React.useState({
		email: "",
		username: "",
		password: "",
	});

	function handleChange(e) {
		updateData({ ...data, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const authType = `sign${type}`;
		onAuth(authType, data)
			.then(() => {
				history.push("/userpage");
			})
			.catch(() => {
				return;
			});
	}

	const styles = {
		up: {
			header: "Sign Up",
			submit: "Register!",
			passwordPlaceholder: "Your desired password",
		},
		in: {
			header: "Sign In",
			submit: "Sign In!",
			passwordPlaceholder: "Enter password",
		},
	};

	return (
		<main id="authform">
			<form onSubmit={handleSubmit}>
				<h2>{styles[type].header}</h2>
				{type === "in" && (
					<p>
						Not registered? <Link to="/signup">Sign up for an account!</Link>
					</p>
				)}
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="your@email.com"
					value={data.email}
					onChange={handleChange}
				></input>
				{type === "up" && (
					<>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Your desired username"
							value={data.username}
							onChange={handleChange}
						></input>
					</>
				)}
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder={styles[type].passwordPlaceholder}
					value={data.password}
					onChange={handleChange}
				></input>
				<button type="submit">{styles[type].submit}</button>
			</form>
		</main>
	);
};

Authform.propTypes = {
	history: PropTypes.object,
	type: PropTypes.oneOf(["up","in"]),
	onAuth: PropTypes.func,
	removeError: PropTypes.func,
};

export default connect(null, { removeError })(Authform);
