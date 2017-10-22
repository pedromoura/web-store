import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationBar extends Component {
    render() {
        return (
            <nav className="pagination">
                <ul className="pagination__list">
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            <i className="material-icons">keyboard_arrow_left</i>
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            1
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            2
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            3
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            ...
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            10
                        </a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="pagination__link">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PaginationBar;
