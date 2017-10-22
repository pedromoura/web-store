import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BagList extends Component {
    constructor() {
        super();

        [
            '_getTotalPrice'
        ].forEach(fn => { this[fn] = this[fn].bind(this); });
    }

    _getTotalPrice() {
        const { bagList } = this.props;
        let total = 0;
        bagList.forEach(bagItem => {
            total += parseInt(bagItem.price, 10);
        });
        return total;
    }

    render() {
        const { bagList } = this.props;
        const totalPrice = this._getTotalPrice();
        return (
            <div className="header-bag__item header-bag__count">
                <div className="header-bag__price">
                    €{totalPrice}
                </div>
                <i className="material-icons">shopping_basket</i>
                <span className="bag__item-counter">{bagList.length}</span>
            </div>
        );
    }
}

BagList.protoTypes = {
    bagList: PropTypes.array.isRequired
};

export default BagList;
