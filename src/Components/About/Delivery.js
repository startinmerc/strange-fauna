import React from 'react';
import { Helmet } from 'react-helmet';

// Returns static about section

function Delivery(){

	return (
		<main id='delivery'>
			<Helmet>
				<title>Strange Flora - Delivery</title>
			</Helmet>
			<h1 className="header">Delivery</h1>
			<div className="boxes">
				<div className="box box__text">
					<h3>Delivery Options</h3>
					<h5>FREE NEXT-DAY DELIVERY</h5>
					<p>Great news! Place your order before 10pm Monday-Friday and you’ll qualify for Free Next-Day Delivery with our Royal Mail Tracked service.</p>
					<p>Royal Mail delivery is 94% assured to arrive on your chosen day. However there is a small chance the delivery may arrive a day later than expected.</p>
					<h5>£5 PREMIUM DELIVERY</h5>
					<p>Want extra peace of mind? Select our Premium Delivery service, which uses a DPD courier to guarantee delivery on your chosen day (between 8am-7pm). It’ll really take away any worry when sending gifts for special occasions.</p>
				</div>
				<div className="box box__image"></div>
				<div className="box box__image"></div>
				<div className="box box__text">
					<h3>Help! Where’s my delivery?</h3>
					<p>We’ve made it really easy to keep tabs on your gift. When your order is dispatched, we’ll send you an email that contains a link to track your delivery. Simply click the link to find out exactly where it is. Or, log into your account, go to My Account and find your tracking details there.</p>
					<p>Can't track your delivery? Don't worry, links may not become active until the morning your order is due to arrive.</p>
				</div>
			</div>
		</main>
	)
}

export default Delivery;
