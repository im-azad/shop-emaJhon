import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';

import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);

	const handleRemove = (key) => {
		// remove cart item
		const newCart = cart.filter((cart) => cart.key !== key);
		setCart(newCart);
		removeFromDb(key);
	};

	// navigation hook use router to change path
	const navigate = useNavigate();

	const handlePlaceOrder = () => {
		navigate('/placeorder');
		// clear ui and local storage when place order
		setCart([]);
		clearTheCart();
	};

	return (
		<div className='shop-container'>
			<div className='product-container'>
				{cart.map((product) => (
					<ReviewItem
						key={product.key}
						product={product}
						handleRemove={handleRemove}
					></ReviewItem>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}>
					<button className='btn-regular' onClick={handlePlaceOrder}>
						Place Order
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;
