import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import NavSectionContainer from '../Nav/NavSectionContainer';

function Landing() {
	return(
		<main id="landing">
			<section style={{color: 'var(--white)'}} className="mushroom">
				<div className="section-image" style={{
					backgroundImage: 'url(https://images.unsplash.com/photo-1528518290605-1fcc8dcca204?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)'
				}}></div>
				<div className="section-stripe" style={{backgroundColor: 'var(--mushroom)'}}></div>
				<div className="section-text">
					<h2 className="section-header">Big Mushroom Offer</h2>
					<p className="section-copy">Buy seven mushrooms get one free! Limited stock available.</p>
					<Link to='/' className="section-link">Shop Now</Link>
					<Link to='/' className="section-link">Shop Later</Link>
				</div>
			</section>
			<section style={{
				color: 'var(--black)'
			}} className="berry">
					<div className="section-image" style={{
				backgroundImage: 'url(https://images.unsplash.com/photo-1445197138520-6099f1c07aa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)',
				}}></div>
				<div className="section-stripe" style={{backgroundColor: 'var(--berry)'}}></div>
				<div className="section-text">
					<h2 className="section-header">Berry Special</h2>
					<p className="section-copy">See what we did there? It's a pun. You like puns, don't you? Yeah you do.</p>
					<Link to='/' className="section-link">Shop Now</Link>
					<Link to='/' className="section-link">Shop Later</Link>
				</div>
			</section>
			<section style={{
				color: 'var(--white)'
			}} className="flower">
				<div className="section-image" style={{
					backgroundImage: 'url(https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)',
				}}></div>
				<div className="section-stripe" style={{backgroundColor: 'var(--flower)'}}></div>
				<div className="section-text">
					<h2 className="section-header">Section Title</h2>
					<p className="section-copy">a bit of detail ahoy</p>
					<Link to='/' className="section-link">Shop Now</Link>
					<Link to='/' className="section-link">Shop Later</Link>
				</div>
			</section>
		</main>
	);
}

export default Landing;
