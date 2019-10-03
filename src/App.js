import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

class Product extends Component {
	render(){
		return (
		<div className="product-card">
			<h4>Product Title</h4>
			<p>Chillwave PBR&B sustainable pitchfork poke kitsch.</p>
		</div>
		)
	}
}



class App extends Component {
	render(){
		const pList = [];
		for (var i = 0; i <= 6; i++) {
			pList.push(<Product />)
		}
		return(
			<div>
				<Header />
				<main>
				{pList}
				{/*
				<h1 style={{textAlign: 'center', fontSize: '10rem', margin: 0}}>Strange Fauna</h1>
				<p>
					Chillwave PBR&B sustainable pitchfork poke kitsch. Literally biodiesel direct trade kinfolk mixtape tbh snackwave. Polaroid beard echo park fixie hella meh hell of. Intelligentsia chartreuse cronut hammock, green juice vinyl ramps taxidermy artisan meditation tilde chia ennui hexagon. La croix small batch mustache, aesthetic +1 jean shorts listicle authentic copper mug church-key unicorn ugh. Brunch tilde bushwick, fashion axe adaptogen poke pinterest chambray deep v knausgaard paleo neutra wolf shabby chic.
				</p>
				*/}
				<div className="color" id="color-1"></div>
				<div className="color" id="color-2"></div>
				<div className="color" id="color-3"></div>
				<div className="color" id="color-4"></div>
				<div className="color" id="color-5"></div>
				
				</main>
				<Footer />
			</div>
		)
	}
}

export default App;
