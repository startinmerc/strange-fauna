import React from 'react';

const Authform = ({history, type}) => {

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
		console.log(data);
		history.push("/");
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
				{type === "up" && <><label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="your@email.com" value={data.email} onChange={handleChange}></input></>}
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" placeholder="desired username" value={data.username} onChange={handleChange}></input>
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="desired password" value={data.password} onChange={handleChange}></input>
				<button type="submit">{styles[type].submit}</button>
			</form>
		</main>
	)
}

export default Authform;
