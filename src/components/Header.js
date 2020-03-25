import React from 'react';
import './styles/Header.css';

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='header--divideMenu'>
					<h1>
						Deck<span>.</span>
					</h1>
					<ul className='header--list'>
						<li>technology</li>
						<li>Ideas</li>
						<li>Leadership</li>
						<li>Video</li>
						<li>News</li>
						<li>Finance</li>
						<li>Entertainment</li>
					</ul>
				</div>
				<img
					src='./icons/icons8-menu.svg'
					className='header--menu'
					alt='menu'
				/>
			</header>
		</>
	);
};

export default Header;
