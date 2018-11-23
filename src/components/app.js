import React, { Component } from 'react';
import Component1 from "../components/component1";
import { Component2 } from "../components/component2";
import { Component3 } from "../components/component3";

class App extends Component {
    render() {
        const title = 'React components:';
        return (
            <div>
                <h1>{title}</h1>
                <hr /><br />
                <Component1 />
                <hr /><br />
                <Component2 />
                <hr /><br />
                <Component3 />
            </div>
        );
    }
}

export default App;