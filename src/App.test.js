import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

describe('App', () => {
    describe('Render App main component', () => {
        it('app must contain a header component ', () => {
            const wrapComponent = shallow(<App />);
            expect(wrapComponent.find(Header).length).toBe(1);
        });

        it('app must have a footer component', () => {
            const wrapComponent = shallow(<App />)
            expect(wrapComponent.find(Footer).length).toBe(1);
        });

        it('app must have a main content component', () => {
            const wrapComponent = shallow(<App />)
            expect(wrapComponent.find(MainContent).length).toBe(1);
        });
    })
});