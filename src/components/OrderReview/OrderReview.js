import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
	const [products] = useProducts();
	return (
		<div>
			<h2>This is Order Review page {products.length} </h2>
		</div>
	);
};

export default OrderReview;
