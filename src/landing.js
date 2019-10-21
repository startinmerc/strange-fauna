import React, {Component} from 'react';
import './landing.css';


class Option extends Component {
	render(){
		return(
			<li className="landing-option" 
			 onMouseEnter={this.props.handleEnter}
			 onMouseLeave={this.props.handleLeave}
			 style={{backgroundColor: `${this.props.color}`}}
			 >
				{this.props.title}
				<div className="submenu" style={{backgroundColor: `${this.props.color}`}}>
					<div className="submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<h5>{this.props.title} Submenu</h5>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<h5>{this.props.title} Submenu</h5>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<h5>{this.props.title} Submenu</h5>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
				</div>
			</li>
		)
	}
}

class Landing extends Component {
	constructor(props){
		super(props)
		this.handleEnter = this.handleEnter.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleEnter(e){
		document.querySelector('.submenu').style.transform = 'scaleY(1)';
	}

	handleLeave(e){
		document.querySelector('.submenu').style.transform = 'scaleY(0)';
	}

	render(){
		return(
			<main>
				<h1 className="display landing-header">Strange Fauna</h1>
				<div className="options">
					<li className="landing-option" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>Mushrooms</li>
					<li className="landing-option" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>Berries</li>
					<li className="landing-option" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>Flowers</li>
					<li className="landing-option" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>Reductions</li>
					<li className="landing-option" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>About Us</li>
					<Submenu />
				</div>
			</main>
		);
	}
}

export default Landing;
