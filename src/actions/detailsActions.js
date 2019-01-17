import {
    FETCH_DETAILS_FAILURE,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_BEGIN
} from "./actionTypes";

export function fetchDetails(id) {
    return dispatch => {
        dispatch(fetchBegin());
        return fetch('http://react-cdp-api.herokuapp.com/movies/' + id)
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
    type: FETCH_DETAILS_BEGIN
});

const fetchSuccess = details => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: { details }
});

const fetchFailure = error => ({
    type: FETCH_DETAILS_FAILURE,
    payload: { error }
});