import React from 'react';

import { Header } from './elements/header';
import { Footer } from './elements/footer';
import ErrorBoundary from './base/errorBoundary';
import RoutePage from './pages/routePage';

import './app.css';
class App extends React.Component {
    render() {
        const {Router, location, context } = this.props;
        return (
            <Router location={location} context={context}>
                <ErrorBoundary>
                    <Header />
                    <RoutePage Router={Router} location={location} context={context}/>
                    <Footer />
                </ErrorBoundary>
            </Router>
        )
    }
}

export default App;
