import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const { children } = this.props;
        return (
            <header className="header container">
                <h1 className="page-title">BRAND Store</h1>
                <aside className="header-bag">
                    {children}
                </aside >
            </header >
        );
    }
}

Header.propTypes = {
    children: PropTypes.array.isRequired
};

export default Header;
