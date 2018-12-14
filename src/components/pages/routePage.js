import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from './mainPage';
import MovieDetailsPage from './movieDetailsPage';

class RoutePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const mainPage = () => (
            <MainPage />
        );

        return (
            <Switch>
                <Route exact path="/" render={mainPage} />
                <Route path="/movies/:id" component={MovieDetailsPage} />
                <Route path="/movies" render={mainPage} />
            </Switch>
        )
    }
}

export default RoutePage