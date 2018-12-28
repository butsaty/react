import React from 'react';
import { Link } from 'react-router-dom';
import './movieList.css';

export default class MovieList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const movies = (
            this.props.movies.map((info) =>
                <div className="grid" key={info.id}>
                    <div className="box">
                        <Link to={`/movies/${info.id}`}
                            className="poster-title-link">
                            <h3 className='poster-title'>{info.title}</h3>
                            <img src={info.poster_path} alt="POSTER" className="poster" />
                        </Link>
                    </div>
                </div>
            )
        );

        if (this.props.movies != null && this.props.movies.length > 0)
            return <div id="movieList">{movies}</div>;

        return <h3 className="no-movies-text">
            No movies to show. Try to search something
        </h3>;
    }
}