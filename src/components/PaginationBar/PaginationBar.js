import React, { Component } from 'react';
import { hashHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShoppingActions from '../../actions/ShoppingActions';

class PaginationBar extends Component {
    constructor() {
        super();

        [
            '_setPage',
            '_getNrOfPages'
        ].forEach(fn => this[fn] = this[fn].bind(this));

    }

    _getNrOfPages() {
        const { pagination } = this.props;
        const { totalResults, pageSize } = pagination;
        let nrOfPages = 0;
        if (totalResults > 0 && pageSize > 0) {
            nrOfPages = totalResults / pageSize;
        }
        return nrOfPages;
    }

    _setPage(pageNrClicked) {
        return () => {
            ShoppingActions.GetProductsList(pageNrClicked);
        }
    }

    render() {
        const {
            pagination
        } = this.props;

        const {
            pageNr
        } = pagination;

        const nrOfPages = this._getNrOfPages();
        const pages = [];
        for (let i = 1; i <= nrOfPages; i++) {
            pages.push(
                <li key={i} className="pagination__item">
                    <a onClick={this._setPage(i)} className={pageNr === i ? "pagination__link--active" : "pagination__link"}>
                        {i}
                    </a>
                </li>
            )
        }

        return (
            <nav className="pagination">
                <ul className="pagination__list">
                    <li className="pagination__item">
                        <button
                            disabled={pageNr <= 1}
                            onClick={this._setPage(pageNr - 1)}
                            className="pagination__link"
                        >
                            <i className="material-icons">keyboard_arrow_left</i>
                        </button>
                    </li>
                    {pages}
                    <li className="pagination__item">
                        <button
                            disabled={pageNr >= nrOfPages}
                            onClick={this._setPage(pageNr + 1)}
                            className="pagination__link"
                        >
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

PaginationBar.propTypes = {
    pagination: PropTypes.object.isRequired
};

export default PaginationBar;
