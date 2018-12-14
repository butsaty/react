import React, { Component } from 'react';

import './movieDetailsPage.css';
import ImdbService from '../../services/imdbService';

export default class MovieDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        };
    }

    async componentDidMount() {
        debugger;
        const details = await ImdbService.getMovieDetails(this.props.match.params.id);
        this.setState({ info: details });
    }

    render() {
        debugger;
        const {title, vote_average, release_date, genres, poster_path, overview} = this.state.info;
        return (
            <div>
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
                    <b>Storyline</b>
                    <p>{overview}</p>
                </div>
            </div>
        );
    }
}