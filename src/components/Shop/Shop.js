import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		// console.log('Api called');
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				// console.log('Data loaded');
			});
	}, []);
	useEffect(() => {
		// console.log('Local storage cart called twice');
		// get data from local storage
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCard = [];
			for (const key in savedCart) {
				const addedProduct = products.find(
					(product) => product.key === key
				);
				if (addedProduct) {
					// get product quantity
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;

					storedCard.push(addedProduct);
				}
			}
			setCart(storedCard);
		}
		// dependency opor nirvor kora abra call korbe jodi products change hoi
	}, [products]);

	const handleAddTOCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		// save to data local storage
		addToDb(product.key);
	};
	return (
		<div>
			<div className='shop-container'>
				<div className='product-container'>
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
