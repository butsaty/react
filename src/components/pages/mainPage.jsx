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

        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        const movies = movieCollection.data || [];
        const count = movieCollection != null
            ? movieCollection.total
            : 0;

        return (
            <React.Fragment>
                <Search onSearch={search} foundCount={count} />
                <MovieList movies={movies} />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    search: (by, value, order) => dispatch(fetchMovies(by, value, order))
});

const mapStateToProps = state => ({
    movieCollection: state.movies.items,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);