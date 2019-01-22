import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_SUCCESS
} from "./actionTypes";

export function fetchMovies(searchBy, value, order) {
    return dispatch => {
        dispatch(fetchBegin());
        return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${searchBy}&sortBy=${order}&sortOrder=asc`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchFailure(error)));
    };
}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const fetchBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

const fetchSuccess = items => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { items }
});

const fetchFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});