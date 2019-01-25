import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import './movieDetailsPage.css';
import { fetchDetails } from "../../actions/detailsActions";

class MovieDetailsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(fetchDetails(this.props.match.params.id));
    }

    render() {
        const { loading, error, details } = this.props;
        return (
            <React.Fragment>
                {loading && <h3 className="no-movies-text">Loading...</h3>}
                {error && <h3 className="no-movies-text">Error! {error.message}</h3>}
                {!loading && !error && !details.title &&
                    <div>
                        <h3 className="no-movies-text">
                            Bad link. Check if movie id is right.
                        </h3>
                        <Link to={`/movies`} className="link">
                            <p>Go back</p>
                        </Link>
                    </div>
                }
                {!loading && !error && details.title &&
                    <div className="details-page">
                        <img src={details.poster_path} alt="POSTER" className="movie-poster" />
                        <div className="movie-info">
                            <div>
                                <div className="base-info">
                                    <p><b>Title: </b>{details.title}</p>
                                    <p><b>IMDB: </b>{details.vote_average}</p>
                                    <p><b>Release date: </b>{details.release_date}</p>
                                    <p><b>Genres: </b>{JSON.stringify(details.genres)}</p>
                                </div>
                            </div>
                            <hr />
                            <b>Overview</b>
                            <p>{details.overview}</p>
                        </div>
                        <Link to={`/movies`} className="link">
                            <p>Go back</p>
                        </Link>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    details: state.details.details,
    loading: state.details.loading,
    error: state.details.error
});

export default connect(mapStateToProps)(MovieDetailsPage);