import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <Link to={`/`} className="main-page-link">
                    <p>netflixroulette</p>
                </Link>
            </header>
        );
    }
};