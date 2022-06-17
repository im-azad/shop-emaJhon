import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Product.css';
const Product = (props) => {
	const { name, img, seller, price, stock, star } = props.product;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	return (
		<div className='single-product'>
			<div className='product-img'>
				<img src={img} alt='' />
			</div>
			<div className='product-info'>
				<h3 className='product-name'>Product Name: {name}</h3>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>Price: {price}</p>
				<p>
					<small>only {stock} left in stock - order soon</small>
				</p>
				<Rating
					initialRating={star}
					readonly
					emptySymbol='fa fa-star-o rating-color'
					fullSymbol='fa fa-star rating-color'
				/>

				<br />
				<button
					onClick={() => props.handleAddTOCart(props.product)}
					className='btn-regular'
				>
					{cartIcon} add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
