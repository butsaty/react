import React from "react";
import jss from "jss";
import { Button } from "reactstrap";
import { HorizontalPanel } from "../base/horizontalPanel";
import Paragraph from "./searchClass";
const { classes } = jss.createStyleSheet({}).attach();

const SearchTypes = {
  title: 'title',
  genres: 'genres'
};

const OrderTypes = {
  releaseDate: 'release date',
  rating: 'rating'
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderBy: OrderTypes.rating,
      searchBy: SearchTypes.title,
      searchValue: ''
    };
  }

  // componentDidMount(){
  //  search();
  // }

  search() {
    this.props.onSearch(
      this.state.searchBy,
      this.state.searchValue,
      this.orderBy);
  }

  updateInputValue(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  onSearchBy(by) {
    this.setState({
      searchBy: by
    });
  }
  searchClass(by) {
    return by === this.state.searchBy
      ? "selected-item--bg-color"
      : "";
  }

  onOrderBy(by) {
    this.setState({
      orderBy: by
    },
      this.search()
    );
  }
  orderClass(by) {
    return by === this.state.orderBy
      ? "selected-item--bg-color"
      : "";
  }
  get orderBy() {
    return this.state.orderBy === OrderTypes.releaseDate
      ? 'release_date'
      : 'vote_average';
  }

  render() {
    const searchBy = (
      <HorizontalPanel>
        <Paragraph className="text-color">SEARCH BY</Paragraph>
        <button
          id="titleBtn"
          className={"button-sm " + this.searchClass(SearchTypes.title)}
          onClick={() => this.onSearchBy(SearchTypes.title)}>
          TITLE
        </button>
        <button
          id="genreBtn"
          className={"button-sm " + this.searchClass(SearchTypes.genres)}
          onClick={() => this.onSearchBy(SearchTypes.genres)}>
          GENRE
        </button>
      </HorizontalPanel>
    )

    const orderBy = (
      <React.Fragment>
        <p>{this.props.foundCount} movies found</p>
        <HorizontalPanel>
          <p className="text-color">Sort by</p>
          <button
            className={"button-sm " + this.orderClass(OrderTypes.releaseDate)}
            onClick={() => this.onOrderBy(OrderTypes.releaseDate)}>
            release date
        </button>
        <button
            className={"button-sm " + this.orderClass(OrderTypes.rating)}
            onClick={() => this.onOrderBy(OrderTypes.rating)}>
            rating
        </button>
        </HorizontalPanel>
      </React.Fragment>
    )

    const searchBtn = (
      <Button
        id="searchBtn"
        className="search-btn"
        onClick={() => this.search()}>
        SEARCH
      </Button>
    )

    return (
      <div className="search-panel">
        <h3 className="text-color">FIND YOUR MOVIE</h3>
        <input
          id="searchInput"
          value={this.state.inputValue}
          onChange={e => this.updateInputValue(e)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.state.search();
            }
          }}
        />
        <div className="search-buttons">
          <HorizontalPanel>
            {searchBy}
            {searchBtn}
          </HorizontalPanel>
          <hr />
          <HorizontalPanel>
            {orderBy}
          </HorizontalPanel>
        </div>
      </div>
    );
  }
}
