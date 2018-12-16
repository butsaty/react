import React, { Component } from 'react';

import Search from '../search';
import MovieList from '../movieList';
import ImdbService from '../../services/imdbService';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            movieTotalCount: 0
        }

        this.search = this.search.bind(this);
    }

    async search(by, value, order) {
        let movies = await ImdbService.getMovieList(by, value, order);
        debugger;
        this.setState({ 
            movieList: movies.data,
            movieTotalCount: movies.total
         });
    }

    render() {
        return (
            <React.Fragment>
                <Search onSearch={this.search} foundCount={this.state.movieTotalCount} />
                <MovieList movies={this.state.movieList} />
            </React.Fragment>
        )
    }
}