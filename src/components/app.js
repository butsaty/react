import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './elements/header';
import { Footer } from './elements/footer';
import ErrorBoundary from './base/errorBoundary';
import RoutePage from './pages/routePage';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary>
                    <Header />
                    <RoutePage />
                    <Footer />
                </ErrorBoundary>
            </BrowserRouter>
        )
    }
}

export default App;