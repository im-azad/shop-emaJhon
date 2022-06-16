import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;
	let total = 0;
	for (const product of cart) {
		total = total + product.price;
	}
	console.log(cart);
	return (
		<div>
			<h2>Order Summary</h2>
			<h3>Items ordered: {cart.length}</h3>
			<h4>Total: {total}</h4>
		</div>
	);
};

export default Cart;
