import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

import Footer from './Footer';

describe('Footer', () => {
    describe('Render Footer component', () => {
        it('footer must contain .container class ', () => {
            const wrapComponent = shallow(<Footer />);
            expect(wrapComponent.find('.container').length).toBe(1);
        });

        it('footer must contain .footer__sidenote class ', () => {
            const wrapComponent = shallow(<Footer />);
            expect(wrapComponent.find('.footer__sidenote').length).toBe(1);
        });
    })
});