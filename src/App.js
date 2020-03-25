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
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={phoneImage}
						title='Search engine optimization and advertising'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={false}
					/>
					<ArticleItem
						image={watchImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={tabImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={droneImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={false}
					/>
					<ArticleItem
						image={evoImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={tabImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={watchImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={true}
					/>
					<ArticleItem
						image={phoneImage}
						title='Using banner stands to increase trade show traffic'
						text='Using banner stands to increase trade show traffic'
						sizeGrid={false}
					/>
				</Articles>
				<Footer />
			</>
		);
	}
}

export default App;
