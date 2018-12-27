import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <Link to={`/`} className="main-page-link">
                <p>netflixroulette</p>
            </Link>
        </footer>
    );
};