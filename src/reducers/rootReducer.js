import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
  movies: movieReducer,
  details: detailsReducer
});