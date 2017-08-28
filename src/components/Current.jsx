import React, { Component } from 'react';

import Skycon from './Skycon';


class Current extends Component {
  render() {
    if (this.props.weather.hasErrored) {
      return <p className="error">Sorry, could not get the weather.</p>;
    }

    if (this.props.weather.isLoading || !this.props.weather.data) {
      return (
        <div className="main-loader">
          <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }


    const { location, current } = this.props.weather.data;

    return (
      <div className="current-container">
        <div className="row justify-content-center">
          <Skycon icon="PARTLY_CLOUDY_DAY" />
          <p className="weather">
            {Math.round(current.main.temp)}° {current.weather[0].main}
          </p>
        </div>
        <p className="description">
          <span>{current.weather[0].description} </span>
           in {location.name}, {location.country}
        </p>
      </div>
    );
  }

}

export default Current;
