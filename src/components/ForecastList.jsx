import React, { Component } from 'react';

import ForecastDay from './ForecastDay';


class ForecastList extends Component {
  render() {
    const days = this.props.weather.data.days;

    return (
      <div className="row justify-content-center">
        <ul className="col-md-10 col-lg-8 forecast-list">
          {days.map(day =>
            <ForecastDay
              key={day.date}
              date={day.date}
              forecasts={day.forecasts} />)}
        </ul>
      </div>
    );
  }

}

export default ForecastList;
