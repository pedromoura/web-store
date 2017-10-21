import React, { Component } from 'react';

class WishList extends Component {
    render() {
        return (
            <div className="header-bag__item header-bag__wishlist-count">
                <i className="material-icons">stars</i>
                <span className="bag__item-counter">5</span>
            </div>
        );
    }
}

export default WishList;
