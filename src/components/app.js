import React, { Component } from 'react';

import { Header } from './header';
import { Footer } from './footer';
import { Search } from './search';
import { ErrorBoundary } from './errorBoundary';

import './app.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ErrorBoundary>
                    <Search />
                </ErrorBoundary>
                <Footer />
            </React.Fragment>
        )
    }
    // render() {
    //     const title = 'React components:';
    //     return (
    //         <React.Fragment>
    //             <h1>{title}</h1>
    //             <hr /><br />

    //             <Component1 /><hr />
    //             <Component2 /><hr />
    //             <Component3 /><hr />
    //             <Component4 />
    //         </React.Fragment>
    //     );
    // }
}

export default App;