import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;

	//regular sum total
	let totalQuantity = 0;
	let total = 0;
	for (const product of cart) {
		// console.log(product);
		// product.quantity = !product.quantity ? 1 : product.quantity;
		if (!product.quantity) {
			product.quantity = 1;
		}
		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}

	// use reducer function to sum total
	/*
		 const total = cart.reduce(
			(previous, product) => previous + product.price,
			0
		); 
	*/
	const shipping = total > 100 ? total * 0.05 : 0;
	const tax = (total * 15) / 100;
	const gandTotal = total + shipping + tax;
	return (
		<div className='cart'>
			<h2>Order Summary</h2>
			<h3>Items ordered: {totalQuantity}</h3>
			<p>Total: {total.toFixed(2)}</p>
			<p>Tax: {tax.toFixed(2)}</p>
			<p>Shipping & Handling: {shipping.toFixed(2)}</p>
			<h3>Gand Total: {gandTotal.toFixed(2)}</h3>
			{props.children}
		</div>
	);
};

export default Cart;
