import React, { Component } from 'react';

import ForecastCurrent from './ForecastCurrent';
import ForecastList from './ForecastList';


class Forecast extends Component {
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

    return (
      <div>
        <ForecastCurrent {...this.props} />
        <ForecastList {...this.props} />
      </div>
    );
  }
}

export default Forecast;
