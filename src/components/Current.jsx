import React, { Component } from 'react';

import Skycon from './Skycon';


class Current extends Component {
  render() {
    if (this.props.weather.hasErrored) {
      return <p>Error</p>;
    }

    if (this.props.weather.isLoading || !this.props.weather.data) {
      return <p>Loading...</p>
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
