import React from 'react';
import { Link } from "react-router-dom";

const Authform = ({history, type, onAuth}) => {

	const [data,updateData] = React.useState({
		email: "",
		username: "",
		password: ""
	});

	function handleChange(e) {
		updateData({...data, [e.target.name]: e.target.value})
	}

	function handleSubmit(e){
		e.preventDefault();
		const authType = `sign${type}`;
		onAuth(authType, data).then(()=>{
			history.push("/");
		}).catch(()=>{return;});
	}

	const styles = {
		up: {
			header: "Sign Up",
			submit: "Register!"
		},
		in: {
			header: "Sign In",
			submit: "Sign In!"
		}
	}

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h2>{styles[type].header}</h2>
				{type === "in" && <p>Not registered? <Link to="/signup">Sign up for an account!</Link></p>}
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="your@email.com" value={data.email} onChange={handleChange}></input>
				{type === "up" && <><label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" placeholder="desired username" value={data.username} onChange={handleChange}></input></>}
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="desired password" value={data.password} onChange={handleChange}></input>
				<button type="submit">{styles[type].submit}</button>
			</form>
		</main>
	)
}

export default Authform;
