import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_BEGIN,
} from '../actions/actionTypes';

const initialState = {
  details: [],
  loading: false,
  error: null,
};

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload.details,
      };

    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        details: [],
      };

    default:
      return state;
  }
}
