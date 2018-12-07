import React, { Component } from 'react';

export class Search extends React.Component {
    render() {
        return <div className="search-panel">
            <h3 className="search-title">FIND YOUR MOVIE</h3>
            <input></input>
            <p>SEARCH BY</p>
            <div className="buttons-panel">
                <button className="button-sm">TITLE</button>
                <button className="button-sm">GENRE</button>
                <button className="button-search">SEARCH</button>
            </div>
        </div>
    }
}