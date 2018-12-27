import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './mainPage';

describe('MainPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MainPage debug />);
  
    expect(component).toMatchSnapshot();
  });
});