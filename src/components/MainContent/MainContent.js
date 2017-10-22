import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import PaginationBar from '../PaginationBar/PaginationBar';

class MainContent extends Component {
    constructor() {
        super();

        [
            '_isProductOnList'
        ].forEach(fn => this[fn] = this[fn].bind(this));
    }

    _isProductOnList(product, list) {
        const prod = list.filter(prodOnList => (prodOnList.id === product.id));
        return prod.length > 0;
    }

    render() {
        const { productsList, bagList, wishList } = this.props;
        return (
            <main className="product-page">
                <div className="container">
                    <ul className="product-list">
                        {
                            productsList.map((product, i) => (
                                <Product
                                    key={i}
                                    product={product}
                                    isOnBagCart={this._isProductOnList(product, bagList)}
                                    isOnWishList={this._isProductOnList(product, wishList)}
                                />
                            ))
                        }
                    </ul>
                    <PaginationBar />
                </div>
            </main>
        );
    }
}

MainContent.propTypes = {
    wishList: PropTypes.array.isRequired,
    bagList: PropTypes.array.isRequired,
    productsList: PropTypes.array.isRequired
};

export default MainContent;
