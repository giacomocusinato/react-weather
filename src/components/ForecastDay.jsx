import React, { Component } from 'react';

import Skycon from './Skycon';
import { getWeekDay } from '../utils/DateUtils';
import { getDayIcon, averages } from '../utils/WeatherUtils';
import { getSkycon } from '../utils/WeatherIconUtils';


class ForecastDay extends Component {

  render() {
    const forecasts = this.props.forecasts;
    const skycon = getSkycon(getDayIcon(forecasts), true);
    const weekDay = getWeekDay(this.props.date);
    const avg = averages(forecasts);

    return (
      <li className="list-group-item forecast-day">
        <div className="day-header">
          <Skycon icon={skycon} class="skycon-small" />
          <p className="week-day">{weekDay}</p>
          <p className="avg">{avg.minTemp}° - {avg.maxTemp}°</p>
          <i className="fa fa-plus-circle"></i>
        </div>
        <div className="day-content">

        </div>
      </li>
    );
  }
}

export default ForecastDay;
