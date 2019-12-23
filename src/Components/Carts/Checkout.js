import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeDelivery } from '../../actionCreators';
import { Link } from 'react-router-dom';
import { deliveries } from '../../seeds';
import { getItems } from '../../middleware';

// Returns checkout element with local state of form content

class Checkout extends Component {
	constructor(props){
		super(props);
		this.state = {
			noteCheckbox: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		document.title = 'Checkout';
	}

	handleChange(e) {
		this.props.changeDelivery(e.target.value);
	}

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	render(){

		let items = getItems(this.props.cart);
		
		return (
			<main id="checkout">
				<div id="order-summary">
					<h2>Order Summary</h2>
					<ul>
						{items.itemList.map((item)=>(<li key={item.id}>
							<img src={item.photos[0]} alt={item.name}/>
							<p>{item.name}</p>
							<p>${item.price}</p>
							</li>))}
					</ul>
					<p style={{textAlign: 'right'}}>Subtotal: ${items.total}</p>
					<p style={{textAlign: 'right'}}>Delivery: ${this.props.delivery}</p>
					<h2 style={{textAlign: 'right'}}>Total: ${items.total + Number(this.props.delivery)}</h2>
				</div>

				<div id="checkout-summary">
					<h2>Summary</h2>
					<div id="delivery-address" className="summary-section">
						<h3>Delivery Address</h3>
						<form>
							<label htmlFor="name">Name <span>*</span></label>
							<input onChange={this.handleInputChange} type="text" name="name" id="name" placeholder="Full Name"/>
							<label htmlFor="address1">Address 1 <span>*</span></label>
							<input onChange={this.handleInputChange} type="text" name="address1" id="address1" placeholder="Address 1"/>
							<label htmlFor="address2">Address 2</label>
							<input onChange={this.handleInputChange} type="text" name="address2" id="address2" placeholder="Address 2"/>
							<label htmlFor="town">Town/City <span>*</span></label>
							<input onChange={this.handleInputChange} type="text" name="town" id="town" placeholder="Town/City"/>
							<label htmlFor="county">County</label>
							<input onChange={this.handleInputChange} type="text" name="county" id="county" placeholder="County"/>
							<label htmlFor="postcode">Postcode <span>*</span></label>
							<input onChange={this.handleInputChange} type="text" name="postcode" id="postcode" placeholder="Postcode"/>
							<label htmlFor="phone">Phone Number <span>*</span></label>
							<input onChange={this.handleInputChange} type="text" name="phone" id="phone" placeholder="+440000000000"/>
						</form>
					</div>
					<div id="delivery-method" className="summary-section">
						<h3>Delivery method</h3>
						{
							deliveries.map((op,i) => (
								<div className="delivery-radio" key={`delivery-option-${i}`}>
									<label>
										<input type="radio" value={op.price} name="delivery-option"
										 id={`delivery-option-${i}`} checked={op.price === this.props.delivery} 
										 onChange={this.handleChange}/> {op.name} - ${op.price}
									</label>
								</div>
							))
						}
					</div>
					<div id="payment" className="summary-section">
						<h3>Payment</h3>
						<form>
							<label htmlFor="#card">card</label><br/>
							<input type="text" name="card" id="card" placeholder="" disabled/>
						</form>
					</div>
					<div id="delivery-options" className="summary-section">
						<h3>Options</h3>
						<div id="check-container">
							<label htmlFor="check-1">Add a note about your order</label>
							<input onChange={this.handleInputChange} type="checkbox" value="1" name="noteCheckbox" id="check-1"/><br/>
							{
								this.state.noteCheckbox ? 
									<input onChange={this.handleInputChange} type="text" name="note" id="note" placeholder="Enter a note for our staff"/>
								: null
							}
						</div>
					</div>
					<button className="summary-section">
						<Link to="/">Pay Now</Link>
					</button>
				</div>
			</main>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		cart: reduxState.cart,
		delivery: reduxState.delivery
	};
}

export default connect(mapStateToProps, { changeDelivery })(Checkout);
