import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

import Header from './Header';

describe('Header', () => {
    describe('Render Header component', () => {
        it('header must contain .header class ', () => {
            const wrapComponent = shallow(<Header />);
            expect(wrapComponent.find('.header').length).toBe(1);
        });

        it('header must contain .page title class ', () => {
            const wrapComponent = shallow(<Header />);
            expect(wrapComponent.find('.page-title').length).toBe(1);
        });
    })
});