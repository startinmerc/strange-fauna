import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Landing from './landing';

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
				<Landing />
				<Footer />
			</div>
		)
	}
}

export default App;
