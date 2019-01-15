import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case actionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
// export default function MovieReducer(state = [], action) {
//   switch (action.type) {
//     case MOVIES_LOADED:
//       console.log('MOVIES_LOADED Action')
//       return action.movies;
//     case DETAILS_LOADED:
//       console.log('DETAILS_LOADED Action')
//       return action.details;
//     default:
//       return state;
//   }
// }