import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    browserHistory,
    Switch
} from 'react-router-dom';

class RoutePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const MainPage = lazy(() => import('./mainPage'));
        const MovieDetailsPage = lazy(() => import('./movieDetailsPage'));
        const NotFoundPage = lazy(() => import('./notFoundPage'));

        return (
            <Router history={browserHistory}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={(props) => <MainPage {...props}/>} />
                        <Route path="/movies/:id" component={(props) => <MovieDetailsPage {...props}/>} />
                        <Route path="/movies" component={(props) => <MainPage {...props}/>} />
                        <Route component={(props) => <NotFoundPage {...props}/>} />
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}

export default RoutePage