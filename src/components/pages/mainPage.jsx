import React, { Component } from 'react';
import { connect } from "react-redux";

import Search from '../elements/search';
import MovieList from '../elements/movieList';
import { fetchMovies } from "../../actions/movieActions";

class MainPage extends Component {
    render() {
        const {
            loading,
            error,
            movieCollection,
            search
        } = this.props;

        const movies = movieCollection.data || [];
        const count = movieCollection != null
            ? movieCollection.total
            : 0;

        return (
            <React.Fragment>
                <Search onSearch={search} foundCount={count} />
                {loading && <h3 className="no-movies-text">Loading...</h3>}
                {error && <h3 className="no-movies-text">Error! {error.message}</h3>}
                {!loading && !error && <MovieList movies={movies} />}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    search: (by, value, order) => dispatch(fetchMovies(by, value, order))
});

const mapStateToProps = state => ({
    movieCollection: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);