import React, { Component } from "react";

const SearchTypes = {
  title: 0,
  genre: 1
};

export class Search extends React.Component {
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
        <input />
        <div className="horizontal-panel">
          <div className="horizontal-panel">
            <p className="text-color">SEARCH BY</p>
            <button className={"button-sm " + this.searchClass(SearchTypes.title)}
              onClick={() => this.onSearchByChanged(SearchTypes.title)}>
              TITLE
            </button>
            <button className={"button-sm " + this.searchClass(SearchTypes.genre)}
              onClick={() => this.onSearchByChanged(SearchTypes.genre)}>
              GENRE
            </button>
          </div>
          <button className="button-search">SEARCH</button>
        </div>
      </div>
    );
  }
}
