import React from 'react';
import './styles/Footer.css';

const Footer = () => {
	return (
		<>
			<div>
				<footer className='footer responsive-desktop'>
					<div className='footer--logo'>
						<h2>
							Deck<span>.</span>
						</h2>
						<p>© 2020 Deck</p>
						<p>Component based UI Kit</p>
					</div>
					<div className='links'>
						<a href='#'>Technology</a>
						<a href='#'>Ideas</a>
					</div>
					<div className='links'>
						<a href='#'>Leadership</a>
						<a href='#'>Video</a>
					</div>
					<div className='links'>
						<a href='#'>News</a>
						<a href='#'>Finance</a>
					</div>
					<div className='links'>
						<a href='#'>Entertainment</a>
					</div>
					<div className='social'>
						<p>Follow us: X X X X</p>
						<form>
							<input type='text' id placeholder='Your E-mail' />
							<button type='submit'>Suscribe</button>
						</form>
					</div>
				</footer>
				<footer className='footer responsive-tablet'>
					<div>
						<div className='footer--logo'>
							<h2>
								Deck<span>.</span>
							</h2>
							<p>© 2020 Deck</p>
							<p>Component based UI Kit</p>
						</div>
						<div className='links'>
							<a href='#'>Technology</a>
							<a href='#'>Ideas</a>
							<a href='#'>Entertainment</a>
						</div>
						<div className='links'>
							<a href='#'>Leadership</a>
							<a href='#'>Video</a>
						</div>
						<div className='links'>
							<a href='#'>News</a>
							<a href='#'>Finance</a>
						</div>
					</div>
					<div className='social'>
						<div>
							<form>
								<input
									type='text'
									id
									placeholder='Your E-mail'
								/>
								<button type='submit'>Suscribe</button>
							</form>
							<p>Follow us: X X X X</p>
						</div>
					</div>
				</footer>
				<footer className='footer responsive-phone'>
					<div>
						<div className='footer--logo'>
							<h2>
								Deck<span>.</span>
							</h2>
							<p>© 2020 Deck</p>
							<p>Component based UI Kit</p>
						</div>
						<div className='social'>
							<div>
								<form>
									<input
										type='text'
										id
										placeholder='Your E-mail'
									/>
									<button type='submit'>Suscribe</button>
								</form>
								<p>Follow us: X X X X</p>
							</div>
						</div>
					</div>
					<div className='links--group-phone'>
						<div className='links'>
							<a href='#'>Technology</a>
							<a href='#'>Ideas</a>
							<a href='#'>Entertainment</a>
							<a href='#'>Leadership</a>
						</div>
						<div className='links'>
							<a href='#'>Video</a>
							<a href='#'>News</a>
							<a href='#'>Finance</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
