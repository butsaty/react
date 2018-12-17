import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.PureComponent {
    render() {
        return (
            <footer>
                <Link to={`/`} className="main-page-link">
                    <p>netflixroulette</p>
                </Link>
            </footer>
        );
    }
};