import React from 'react';
import { Link } from 'react-router-dom';

import './notFoundPage.css';

export default class NotFoundPage extends React.PureComponent {
    render() {
        return (
            <div className="not-fund-page">
                <h1>404</h1>
                <h3>Page not found</h3>
                <Link to={`/`} className="link">
                    <p>Go back</p>
                </Link>
            </div>
        );
    }
}