import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleAddTOCart = (product) => {
		console.log(product.name);
	};
	return (
		<div>
			<div className='shop-container'>
				<div className='product-container'>
					<h2>Product {products.length}</h2>
					{products.map((product) => (
						<Product
							product={product}
							key={product.key}
							handleAddTOCart={handleAddTOCart}
						></Product>
					))}
				</div>
				<div className='cart-container'>
					<h2>Order Summary</h2>
					<h3>Items ordered:1</h3>
				</div>
			</div>
		</div>
	);
};

export default Shop;
