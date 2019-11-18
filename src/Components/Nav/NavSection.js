import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import seeds from '../../seeds';
import SectionItem from './NavSectionItem';

class NavSection extends Component {
	render(){
		if(this.props.section==='about') {
			return (
				<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to='/about'>
					{this.props.title}
				</Link>
			 </li>
			);
		}
		let link = `/products/${this.props.title}`;
		let sectionItems = seeds.filter((seed)=>(seed.type === this.props.section));
		return(
			<li className="nav-section" style={{backgroundColor: `${this.props.color}`}}>
				<Link to={link}>{this.props.title}</Link>
				<div className="nav-section-submenu" style={{backgroundColor: `${this.props.color}`}}>
					<SectionItem item={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<SectionItem item={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
					<SectionItem item={sectionItems[Math.floor(Math.random()*sectionItems.length)]}/>
				</div>
			</li>
		);
	}
}

export default NavSection;
