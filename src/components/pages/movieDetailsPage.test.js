import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailsPage from './movieDetailsPage';

describe('movieDetailsPage', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<MovieDetailsPage debug />);

        expect(component).toMatchSnapshot();
    });
});