import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// TODO Implement fetch mocking
// global.fetch = require('jest-fetch-mock');

configure({ adapter: new Adapter() });
