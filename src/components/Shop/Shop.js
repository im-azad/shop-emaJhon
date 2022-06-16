import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleAddTOCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
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
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
