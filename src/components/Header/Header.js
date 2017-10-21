import React, { Component } from 'react';
import BagList from '../BagList/BagList';
import WishList from '../WishList/WishList';

class Header extends Component {
    render() {
        return (
            <header className="header container">
                <h1 className="page-title">BRAND Store</h1>
                <aside className="header-bag">
                    <BagList />
                    <WishList />
                </aside >
            </header >
        );
    }
}

export default Header;
