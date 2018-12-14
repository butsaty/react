import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './header';
import { Footer } from './footer';
import ErrorBoundary from './errorBoundary';
import RoutePage from './pages/routePage';

import './app.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BrowserRouter>
                    <ErrorBoundary>
                        <RoutePage />
                    </ErrorBoundary>
                </BrowserRouter>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;