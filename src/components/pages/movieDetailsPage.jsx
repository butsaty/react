import React from 'react';
import { Link } from 'react-router-dom';

import './movieDetailsPage.css';
import ImdbService from '../imdbService';

export default class MovieDetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        };
    }

    async componentDidMount() {
        const details = await ImdbService.getMovieDetails(this.props.match.params.id);
        this.setState({ info: details });
    }

    render() {
        const {
            title,
            vote_average,
            release_date,
            genres,
            poster_path,
            overview
        } = this.state.info;

        return (
            <div className="details-page">
                <img src={poster_path} alt="POSTER" className="movie-poster" />
                <div className="movie-info">
                    <div>
                        <div className="base-info">
                            <p><b>Title: </b>{title}</p>
                            <p><b>IMDB: </b>{vote_average}</p>
                            <p><b>Release date: </b>{release_date}</p>
                            <p><b>Genres: </b>{JSON.stringify(genres)}</p>
                        </div>
                    </div>
                    <hr />
                    <b>Overview</b>
                    <p>{overview}</p>
                </div>
                <Link to={`/`} className="link">
                    <p>Go back</p>
                </Link>
            </div>
        );
    }
}