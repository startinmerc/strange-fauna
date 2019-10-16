import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {
	render(){
		return(
			<main>
			<h1 className="display landing-header">Strange Fauna</h1>
			<div className="color" id="color-1"><a href="#">Mushrooms</a></div>
			<div className="color" id="color-2"><a href="#">Berries</a></div>
			<div className="color" id="color-3"><a href="#">Flowers</a></div>
			<div className="color" id="color-4"><a href="#">Reductions</a></div>
			<div className="color" id="color-5"><a href="#">About Us</a></div>
			</main>
		);
	}
}

export default Landing;
