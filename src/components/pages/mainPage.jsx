import React, { Component } from 'react';

import Search from '../search';
import MovieList from '../movieList';
import ImdbService from '../../services/imdbService';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
        }

        this.search = this.search.bind(this);
    }

    async search(by, value) {
        let movies = await ImdbService.getMovieList(by, value);
        this.setState({ movieList: movies.data });
    }

    render() {
        return (
            <React.Fragment>
                <Search onSearch={this.search} />
                <MovieList movies={this.state.movieList} />
            </React.Fragment>
        )
    }
}