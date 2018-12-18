import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <Link to={`/`} className="main-page-link">
                <p>netflixroulette</p>
            </Link>
        </header>
    );
}