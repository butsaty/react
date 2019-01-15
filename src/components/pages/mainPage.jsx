import React, { Component } from 'react';
import { connect } from "net";

import Search from '../elements/search';
import MovieList from '../elements/movieList';
import { fetchMoviesBegin } from "../../actions/movieActions";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            movieTotalCount: 0
        }

        this.search = this.search.bind(this);
    }

    async search(by, value, order) {
        this.props.dispatch(fetchMoviesBegin(by, value, order));
        this.setState({
            movieList: this.props.movies.data,
            movieTotalCount: this.props.movies.total
        });
    }

    render() {
        return (
            <React.Fragment>
                <Search onSearch={this.search} foundCount={this.state.movieTotalCount} />
                <MovieList movies={this.props.movies} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    products: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error
});

export default connect(mapStateToProps)(MainPage);