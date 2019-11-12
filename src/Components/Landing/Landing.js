import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';


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
						<Link to="/products"><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<Link to="/products"><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="submenu-section">
						<img src="https://picsum.photos/200" alt="" />
						<Link to="/products"><h5>{this.props.title} Submenu</h5></Link>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
				</div>
			</li>
		)
	}
}

class Landing extends Component {

	render(){
		const colors = [
			{title: 'Mushrooms', color:'var(--beige)'},
			{title: 'Berries', color:'var(--light-green)'},
			{title: 'Flowers', color:'var(--dark-green)'},
			{title: 'Reductions', color:'var(--light-blue)'},
			{title: 'About Us', color:'var(--dark-blue)'}
		];
		const ops = colors.map((option,index)=>(
			<Option key={'option-'+index} {...option}/>
		 ));
		return(
			<main>
				<div className="options">
					{ops}
				</div>
			</main>
		);
	}
}

export default Landing;
