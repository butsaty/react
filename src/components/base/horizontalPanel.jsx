import React, { Component } from "react";

export class HorizontalPanel extends React.PureComponent {
    render(){
        return <div className="horizontal-panel">
            {this.props.children}
        </div>
    }
}