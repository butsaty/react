import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };

    case actionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
