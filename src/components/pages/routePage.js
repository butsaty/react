import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    browserHistory,
    Switch
} from 'react-router-dom';

import MainPage from './mainPage';
import MovieDetailsPage from './movieDetailsPage';
import NotFoundPage from './notFoundPage';

class RoutePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const mainPage = () => (
            <MainPage />
        );

        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" render={mainPage} />
                    <Route path="/movies/:id" component={MovieDetailsPage} />
                    <Route path="/movies" render={mainPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}

export default RoutePage