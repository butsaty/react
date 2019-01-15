import * as actionType from "./actionTypes";

export function fetchMovies(searchBy, value, order) {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${searchBy}&sortBy=${order}&sortOrder=asc`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchMoviesBegin = () => ({
    type: actionType.FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: actionType.FETCH_MOVIES_SUCCESS,
    payload: { movies }
});

export const fetchMoviesFailure = error => ({
    type: actionType.FETCH_MOVIES_FAILURE,
    payload: { error }
});