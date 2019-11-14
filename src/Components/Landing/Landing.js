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
			{title: 'Mushrooms', color:'var(--mushroom)'},
			{title: 'Berries', color:'var(--berry)'},
			{title: 'Flowers', color:'var(--flower)'},
			{title: 'Reductions', color:'var(--reduction)'},
			{title: 'About Us', color:'var(--primary)'}
		];
		const ops = colors.map((option,index)=>(
			<Option key={'option-'+index} {...option}/>
		 ));
		return(
			<main className="landing">
				<div className="options">
					{ops}
				</div>
			</main>
		);
	}
}

export default Landing;
