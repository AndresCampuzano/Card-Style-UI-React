import React, { Component } from 'react';
import './styles/ArticleItem.css';

class ArticleItem extends Component {
	// ({ image, title, text, sizeGrid })
	constructor(props) {
		super(props);
		this.state = {
			size: props.sizeGrid
		};
	}

	render() {
		return (
			<>
				{this.state.size === true ? (
					<div className='articles--item large'>
						<img src={this.props.image} alt={this.props.image} />
						<h2>{this.props.title}</h2>
						<p>{this.props.text}</p>
					</div>
				) : (
					<div className='articles--item short'>
						<img src={this.props.image} alt={this.props.image} />
						<h2>{this.props.title}</h2>
						<p>{this.props.text}</p>
					</div>
				)}
			</>
		);
	}
}

export default ArticleItem;
