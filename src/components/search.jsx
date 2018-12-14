import React, { Component } from "react";
import { HorizontalPanel } from './base/horizontalPanel';

const SearchTypes = {
  title: 'title',
  genres: 'genres'
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: SearchTypes.title,
      searchValue: ''
    };
  }

  onSearchByChanged(searchBy) {
    this.setState({
      searchBy: searchBy
    });
  }

  updateInputValue(e) {
    this.setState({
      searchValue: e.target.value
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
        <input
          value={this.state.inputValue}
          onChange={e => this.updateInputValue(e)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.state.search();
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
            <button className={"button-sm " + this.searchClass(SearchTypes.genres)}
              onClick={() => this.onSearchByChanged(SearchTypes.genres)}>
              GENRE
            </button>
          </HorizontalPanel>
          <button className="button-search"
            onClick={() => this.props.onSearch(this.state.searchBy, this.state.searchValue)}>
            SEARCH
          </button>
        </HorizontalPanel>
      </div>
    );
  }
}
