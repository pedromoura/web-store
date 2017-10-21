import React, { Component } from 'react';

class BagList extends Component {
	render() {
		return (
			<div className="header-bag__item header-bag__count">
				<div className="header-bag__price">
					£210
				</div>
				<i className="material-icons">shopping_basket</i>
				<span className="bag__item-counter">10</span>
			</div>
		);
	}
}

export default BagList;
