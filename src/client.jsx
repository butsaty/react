import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import createStore from "./store";

const store = createStore(window.PRELOADED_STATE);

hydrate(
    <Provider store={store} Router={BrowserRouter}>
        <App Router={BrowserRouter}/>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
