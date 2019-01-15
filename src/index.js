import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
