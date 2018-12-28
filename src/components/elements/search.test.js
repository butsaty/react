import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

describe('search component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Search debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly without props', () => {
        const component = shallow(<Search/>);

        expect(component).toMatchSnapshot();
    });
});