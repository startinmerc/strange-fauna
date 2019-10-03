import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {
	render(){
		return(
			<main>
			<h1 className="display landing-header">Strange Fauna</h1>
			{/*
			{pList}

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
		);
	}
}

export default Landing;
