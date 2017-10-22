import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WishList extends Component {
    render() {
        const { wishList } = this.props;
        return (
            <div className="header-bag__item header-bag__wishlist-count">
                <i className="material-icons">stars</i>
                <span className="bag__item-counter">{wishList.length}</span>
            </div>
        );
    }
}

WishList.propTypes = {
    wishList: PropTypes.array.isRequired,
};

export default WishList;
