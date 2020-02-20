import React from "react";
import './Signup.css';

export default function Signup(){
	return (
		<form className="signup">
			<label className="signup__label" htmlFor="email">
				Sign up to get our latest products, top deals and inspiring stories straight to your inbox.
				Plus, get £5 off your first order over £50 – please allow 24hrs to receive your code.
			</label>
			<br/>
			<input className="signup__input" type="text"/>
			<button className="signup__submit" type="submit">
				Sign Up!
			</button>
		</form>
	)
}