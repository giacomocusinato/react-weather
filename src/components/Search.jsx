import React, { Component } from 'react';

class Search extends Component {
  componentDidMount() {
    console.log(this.props.weather);
  }

  render() {
    return (
      <div className="row justify-content-center search-container">
        <div className="form-inline">
          <div className="input-group search-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
              aria-label="Enter a city"
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
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
