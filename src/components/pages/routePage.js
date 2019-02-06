import React from 'react';
import MainPage from './mainPage';
import MovieDetailsPage from './movieDetailsPage';
import NotFoundPage from './notFoundPage';
import { Route, Switch } from 'react-router-dom';

class RoutePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {Router, location, context } = this.props;
        return (
            <Router location={location} context={context}>
                <Switch>
                    <Route exact path="/" component={(props) => <MainPage {...props}/>} />
                    <Route path="/movies/:id" component={(props) => <MovieDetailsPage {...props}/>} />
                    <Route path="/movies" component={(props) => <MainPage {...props}/>} />
                    <Route component={(props) => <NotFoundPage {...props}/>} />
                </Switch>
            </Router>
        )
    }
}

export default RoutePage
