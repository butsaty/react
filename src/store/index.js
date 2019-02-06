import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && 
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   );
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

///---
//let middleware = applyMiddleware(thunk);
//let store = middleware(createStore)(rootReducer);

//export default store; 
///---

export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

export default (initialState) =>{
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}