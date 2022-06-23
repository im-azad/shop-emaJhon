import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '40px',
			}}
		>
			<img src={img} alt='' />
		</div>
	);
};

export default PlaceOrder;
