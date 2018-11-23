import React, { Component } from 'react';

import { Component1 } from "../components/component1";
import { Component2 } from "../components/component2";
import { Component3 } from "../components/component3";
import { Component4 } from "../components/component4";

class App extends Component {
    render() {
        const title = 'React components:';
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <hr /><br />
                
                <Component1 /><hr />
                <Component2 /><hr />
                <Component3 /><hr />
                <Component4 />
            </React.Fragment>
        );
    }
}

export default App;