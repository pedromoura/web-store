import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import sinon from 'sinon';

configure({ adapter: new Adapter() })

import BagList from './BagList';

describe('BagList', () => {
    describe('Render BagList component', () => {
        it('BagList must contain .bag__item-counter class ', () => {
            const wrapComponent = shallow(
                <BagList
                    bagList={[
                        {
                            "id": "57",
                            "title": "OFF-WHITE",
                            "subtitle": "Spray paint checked shirt",
                            "price": "335",
                            "image": "images/img01.jpg"
                        }
                    ]}
                />
            );
            expect(wrapComponent.find('.bag__item-counter').length).toBe(1);
        });

        it('BagList must contain .header-bag__price class ', () => {
            const wrapComponent = shallow(
                <BagList
                    bagList={[
                        {
                            "id": "57",
                            "title": "OFF-WHITE",
                            "subtitle": "Spray paint checked shirt",
                            "price": "335",
                            "image": "images/img01.jpg"
                        }
                    ]}
                />
            );
            expect(wrapComponent.find('.header-bag__price').length).toBe(1);
        });

        it('BagList must return total price of products ', () => {
            const wrapComponent = shallow(
                <BagList
                    bagList={[
                        {
                            "id": "57",
                            "title": "OFF-WHITE",
                            "subtitle": "Spray paint checked shirt",
                            "price": "335",
                            "image": "images/img01.jpg"
                        }
                    ]}
                />
            );

            sinon.spy(wrapComponent.instance(), '_getTotalPrice');
            const result = wrapComponent.instance()._getTotalPrice();
            expect(wrapComponent.instance()._getTotalPrice.calledOnce).toEqual(true);
            expect(result).toEqual(335);
        });
    })
});