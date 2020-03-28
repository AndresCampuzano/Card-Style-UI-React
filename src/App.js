import React, { Component } from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import ArticleItem from './components/ArticleItem';
import Footer from './components/Footer';

import './components/styles/Responsive.css';

import evoImage from './components/images/evo.png';
import droneImage from './components/images/drone.png';
import phoneImage from './components/images/phone.png';
import tabImage from './components/images/tab.png';
import watchImage from './components/images/watch.png';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Articles>
					<ArticleItem
						image={evoImage}
						title='Using banner stands to increase trade show traffic'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={phoneImage}
						title='Search Engine Optimization And Advertising'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={false}
					/>
					<ArticleItem
						image={watchImage}
						title='How to Write A Good Headline For Facebook Ads'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={tabImage}
						title='15 Tips To Increase Your Adwords Profits'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={droneImage}
						title='6 Powerful Tips For Creating Testimonials That Sell Your Products Fast'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={false}
					/>
					<ArticleItem
						image={evoImage}
						title='Using banner stands to increase trade show traffic'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={tabImage}
						title='15 Tips To Increase Your Adwords Profits'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={watchImage}
						title='How to Write A Good Headline For Facebook Ads'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={true}
					/>
					<ArticleItem
						image={phoneImage}
						title='Search Engine Optimization And Advertising'
						text='There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.'
						sizeGrid={false}
					/>
				</Articles>
				<Footer />
			</>
		);
	}
}

export default App;
