import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<div>
			<Header></Header>

			<Routes>
				<Route path='/' element={<Shop></Shop>} />
				<Route path='/index.html' element={<Shop></Shop>} />
				<Route path='/shop' element={<Shop></Shop>} />
				<Route path='/review' element={<Review></Review>} />
				<Route path='/inventory' element={<Inventory></Inventory>} />
				<Route path='*' element={<NotFound></NotFound>} />
			</Routes>
		</div>
	);
}

export default App;
