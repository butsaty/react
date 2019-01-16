import React, { Component } from 'react';
import { connect } from "react-redux";

import Search from '../elements/search';
import MovieList from '../elements/movieList';
import { fetchMovies } from "../../actions/movieActions";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    get movieTotalCount() {
        return this.props.movieCollection != null
            ? this.props.movieCollection.total
            : 0;
    }

    get movieList() {
        return this.props.movieCollection.data || [];
    }

    async search(by, value, order) {
        this.props.dispatch(fetchMovies(by, value, order));
    }

    render() {
        return (
            <React.Fragment>
                <Search onSearch={this.search} foundCount={this.movieTotalCount} />
                <MovieList movies={this.movieList} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    movieCollection: state.movies.items,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(MainPage);