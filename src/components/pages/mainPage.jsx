import React, { Component } from 'react';

import Search from '../search';
import MovieList from '../movieList';
import ImdbService from '../../services/imdbService';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: null
        }

        this.search = this.search.bind(this);
    }

    async search() {
        let movies = await ImdbService.getMovieList();
        this.setState({
            movieList: movies.data
        });
    }

    render() {
        return (
            <React.Fragment>
                <Search search={this.search} />
                <MovieList movies={this.state.movieList} />
            </React.Fragment>
        )
    }
}