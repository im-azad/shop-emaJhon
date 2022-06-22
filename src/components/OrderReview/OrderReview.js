import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart] = useCart(products);

	return (
		<div>
			<h2>This is Order Review page {products.length} </h2>
			<h3>Added Cart: {cart.length}</h3>
		</div>
	);
};

export default OrderReview;
