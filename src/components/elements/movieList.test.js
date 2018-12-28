import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './movieList';

describe('movieList component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<MovieList debug movies={[]}/>);

        expect(component).toMatchSnapshot();
    });
});