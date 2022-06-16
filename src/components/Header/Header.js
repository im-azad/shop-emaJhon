import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header className='header-area'>
				<div className='logo'>
					<a href='index.html'>
						<img src={logo} alt='' />
					</a>
				</div>
				<nav className='nav-bar'>
					<ul className='nav-list'>
						<li>
							<a href='/shop'>Shope</a>
						</li>
						<li>
							<a href='/order'>Order Review</a>
						</li>
						<li>
							<a href='/inventory'>Manage Inventory here</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
