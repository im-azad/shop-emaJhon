import React from 'react';
import { Link } from 'react-router-dom';
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
							<Link to='/shop'>Shope</Link>
						</li>
						<li>
							<Link to='/review'>Order Review</Link>
						</li>
						<li>
							<Link to='/inventory'>Manage Inventory here</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
