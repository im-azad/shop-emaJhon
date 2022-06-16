import React from 'react';
import './Product.css';
const Product = (props) => {
	const { name, img, seller, price, stock } = props.product;
	return (
		<div className='single-product'>
			<div className='product-img'>
				<img src={img} alt='' />
			</div>
			<div className='product-info'>
				<h2 className='product-name'>Product Name: {name}</h2>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>Price: {price}</p>
				<p>
					<small>only {stock} left in stock - order soon</small>
				</p>
				<button
					onClick={() => props.handleAddTOCart(props.product)}
					className='cart-btn'
				>
					add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
