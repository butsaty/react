import React, { Component } from 'react'

export default class MovieDetailsPage extends React.PureComponent {
    render() {
        const { id, title, year, rate, details } = this.props;

        let detailsInfo;
        // if (id === details.id) {
        //     detailsInfo = (
        //         <div>
        //             <i>{details.storyline}</i>
        //         </div>
        //     );
        // }

        return <div>
            <b>{title} </b>(year: {year}, rate: {rate})
            {/* {detailsInfo} */}
        </div>
    }
}
