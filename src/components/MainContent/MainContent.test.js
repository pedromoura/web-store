import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import sinon from 'sinon';

configure({ adapter: new Adapter() })

import MainContent from './MainContent';
import Product from '../Product/Product';
import PaginationBar from '../PaginationBar/PaginationBar';

const mockProducts = [
    {
        "id": "57",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    },
    {
        "id": "58",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    },
    {
        "id": "59",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    },
    {
        "id": "60",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    }
];

const mockBagList = [
    {
        "id": "57",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    },
    {
        "id": "58",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    }
];

const mockWishList = [
    {
        "id": "57",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    },
    {
        "id": "58",
        "title": "OFF-WHITE",
        "subtitle": "Spray paint checked shirt",
        "price": "335",
        "image": "images/img01.jpg"
    }
];

describe('MainContent', () => {
    describe('Render MainContent component', () => {
        it('MainContent must contain a product-list class ', () => {
            const wrapComponent = shallow(
                <MainContent
                    wishList={mockWishList}
                    bagList={mockBagList}
                    productsList={mockProducts}
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );
            expect(wrapComponent.find('.product-list').length).toBe(1);
        });

        it('MainContent must contain 4 product components ', () => {
            const wrapComponent = shallow(
                <MainContent
                    wishList={mockWishList}
                    bagList={mockBagList}
                    productsList={mockProducts}
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );
            expect(wrapComponent.find(Product).length).toBe(4);
        });

        it('Main Content must contain a PaginationBar component ', () => {
            const wrapComponent = shallow(
                <MainContent
                    wishList={mockWishList}
                    bagList={mockBagList}
                    productsList={mockProducts}
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );
            expect(wrapComponent.find(PaginationBar).length).toBe(1);
        });
    })
});