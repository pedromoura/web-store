import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/images/img01.jpg'
import ShoppingActions from '../../actions/ShoppingActions';

class Product extends Component {
    constructor() {
        super();

        [
            '_addToBagList',
            '_removeFromBag',
            '_addToWishList',
            '_removeFromWishList'
        ].forEach(fn => this[fn] = this[fn].bind(this));
    }

    _addToBagList() {
        const { product } = this.props;
        ShoppingActions.AddProductToBag(product);
    }

    _removeFromBag() {
        const { product } = this.props;
        ShoppingActions.RemoveProductFromBag(product);
    }

    _addToWishList() {
        const { product } = this.props;
        ShoppingActions.AddProductToWishList(product);
    }

    _removeFromWishList() {
        const { product } = this.props;
        ShoppingActions.RemoveProductFromWishList(product);
    }

    render() {
        const { product, isOnBagCart, isOnWishList } = this.props;
        return (
            <li className="product-list__item">
                <article className="product" itemScope itemType="http://schema.org/Product">
                    <figure className="product__image-wrapper">
                        <img className="product__image" src={product.image} alt="Product" itemProp="image" />
                        {
                            isOnWishList && (
                                <button
                                    onClick={this._removeFromWishList}
                                    className="product__wishlist-button button button--round button--wishlist button--in-wishlist"
                                >
                                    <i className="material-icons">stars</i>
                                </button>
                            )
                        }
                        {
                            !isOnWishList && (
                                <button
                                    onClick={this._addToWishList}
                                    className="product__wishlist-button button button--round button--wishlist"
                                >
                                    <i className="material-icons">stars</i>
                                </button>
                            )
                        }
                    </figure>
                    <div className="product__details">
                        <h1 className="product__title" itemProp="brand">{product.title}</h1>
                        <p className="product__subtitle" itemProp="description">{product.subtitle}</p>
                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                            <span className="product__price">€{product.price}</span>
                        </div>
                        {
                            isOnBagCart && (
                                <button
                                    className="product__add-to-cart button button--primary button--in-cart"
                                    onClick={this._removeFromBag}
                                >
                                    Remove from Cart
                                </button>
                            )
                        }
                        {
                            !isOnBagCart && (
                                <button
                                    className="product__add-to-cart button button--primary"
                                    onClick={this._addToBagList}
                                >
                                    Add to Cart
                                </button>
                            )
                        }
                    </div>
                </article>
            </li>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object,
    isOnBagCart: PropTypes.bool.isRequired,
};

export default Product;
