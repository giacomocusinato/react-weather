import React, { Component } from 'react';

class Search extends Component {

  constructor() {
    super();

    this.state = {location: ''};
  }

  componentDidMount = () => this.props.fetchWeather('London,UK');

  handleLocationChange = (e) =>
    this.setState({location: e.target.value});

  handleSearchClick = () => {
    if (this.state.location === '')
      return;

    this.props.fetchWeather(this.state.location);
  }

  render() {
    return (
      <div className="row justify-content-center search-container">
        <div className="form-inline">
          <div className="input-group search-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a location, e.g. London, UK"
              aria-label="Enter a city"
              onChange={this.handleLocationChange}
            />
            <span className="input-group-btn">
              <button
                onClick={this.handleSearchClick}
                className="btn btn-secondary"
                type="button">
                Search
              </button>
            </span>
          </div>
          <button className="btn btn-primary btn-find" type="button">
            <i className="fa fa-location-arrow"></i>
            Find Me!
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
