import React, { Component } from "react";
import { HorizontalPanel } from './base/horizontalPanel';

const SearchTypes = {
  title: 0,
  genre: 1
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: SearchTypes.title
    };
  }

  onSearchByChanged(searchBy) {
    this.setState({
      searchBy: searchBy
    });
  }

  searchClass(searchBy) {
    return searchBy === this.state.searchBy
      ? "selected-item--bg-color"
      : "";
  }

  render() {
    return (
      <div className="search-panel">
        <h3 className="text-color">FIND YOUR MOVIE</h3>
        <input onKeyPress={event => {
          if (event.key === "Enter") {
            this.props.search();
          }
        }}
        />
        <HorizontalPanel>
          <HorizontalPanel>
            <p className="text-color">SEARCH BY</p>
            <button className={"button-sm " + this.searchClass(SearchTypes.title)}
              onClick={() => this.onSearchByChanged(SearchTypes.title)}>
              TITLE
            </button>
            <button className={"button-sm " + this.searchClass(SearchTypes.genre)}
              onClick={() => this.onSearchByChanged(SearchTypes.genre)}>
              GENRE
            </button>
          </HorizontalPanel>
          <button className="button-search"
            onClick={() => this.props.search()}>
            SEARCH
          </button>
        </HorizontalPanel>
      </div>
    );
  }
}
