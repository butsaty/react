import React from 'react';
import { Link } from 'react-router-dom'
import './movieList.css';

export default class MovieList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const movieTile = (
            this.props.movies != null &&
            this.props.movies.map((info) =>
                <div className="grid" key={info.id}>
                    <div className="box">
                        <Link to={`/movies/${info.id}`} activeClassName="current" className="poster-title-link">
                            <h3 className='poster-title'>{info.title}</h3>
                            <img src={info.poster_path} alt="POSTER" className="poster" />
                        </Link>
                    </div>
                </div>
            )
        );

        return <div>{movieTile}</div>
    }
}