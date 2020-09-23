import React from 'react';

const Authform = ({type}) => {

	const [data,updateData] = React.useState({
		email: "",
		username: "",
		password: ""
	});

	function handleChange(e) {
		updateData({...data, [e.target.name]: e.target.value})
	}

	return (
		<main>
			<form>
				<h2>{type}</h2>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="your@email.com" value={data.email} onChange={handleChange}></input>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" placeholder="desired username" value={data.username} onChange={handleChange}></input>
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="desired password" value={data.password} onChange={handleChange}></input>
			</form>
		</main>
	)
}

export default Authform;
