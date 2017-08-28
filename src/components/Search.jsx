import React, { Component } from 'react';

import { getCoordinates } from '../utils/geolocationUtils';


class Search extends Component {

  constructor() {
    super();

    this.state = {
      location: '',
      positionLoading: false,
      weatherLoading: false
    };
  }

  componentDidMount = () => this.props.fetchWeather('London,UK');

  handleLocationChange = (e) =>
    this.setState({location: e.target.value});

  handleSearchClick = () => {
    if (this.state.location === '')
      return;

    this.props.fetchWeather(this.state.location);
  }

  handleFindMeClick = () => {
    this.setState({ positionLoading: true });

    getCoordinates()
      .then(coords => this.props.fetchWeather(coords)
      .then(() => this.setState({ positionLoading: false }))
    );
  }

  render() {
    return (
      <div className="row justify-content-center search-container">
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
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
                type="submit">
                Search
              </button>
            </span>
          </div>
          <button
            onClick={this.handleFindMeClick}
            className="btn btn-primary btn-find"
            type="button">
            {this.state.positionLoading ?
              <i className="fa fa-circle-o-notch fa-spin fa-fw"></i> :
              <i className="fa fa-location-arrow"></i>}
            Find Me!
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
