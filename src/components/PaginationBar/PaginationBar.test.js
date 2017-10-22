import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import sinon from 'sinon';

configure({ adapter: new Adapter() })

import PaginationBar from './PaginationBar';

describe('PaginationBar', () => {
    describe('Render PaginationBar component', () => {
        it('PaginationBar must contain .pagination class ', () => {
            const wrapComponent = shallow(
                <PaginationBar
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );
            expect(wrapComponent.find('.pagination__item').length).toBe(12);
        });

        it('PaginationBar must contain .pagination__link class ', () => {
            const wrapComponent = shallow(
                <PaginationBar
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );
            expect(wrapComponent.find('.pagination__link').length).toBe(11);
        });

        it('Pagination Bar must return total nº of pages ', () => {
            const wrapComponent = shallow(
                <PaginationBar
                    pagination={{
                        totalResults: 60,
                        pageNr: 1,
                        pageSize: 6
                    }}
                />
            );

            sinon.spy(wrapComponent.instance(), '_getNrOfPages');
            const result = wrapComponent.instance()._getNrOfPages();
            expect(wrapComponent.instance()._getNrOfPages.calledOnce).toEqual(true);
            expect(result).toEqual(10);
        });
    })
});