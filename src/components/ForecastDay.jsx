import React, { Component } from 'react';

import Skycon from './Skycon';
import { getWeekDay } from '../utils/DateUtils';
import { getDayIcon, averages } from '../utils/WeatherUtils';
import { getSkycon } from '../utils/WeatherIconUtils';


class ForecastDay extends Component {

  render() {
    const forecasts = this.props.forecasts;
    const skycon = getSkycon(getDayIcon(forecasts));
    const weekDay = getWeekDay(this.props.date);
    const avg = averages(forecasts);

    return (
      <li className="list-group-item">
        <div className="item-header">
          <div className="item-header-left">
            <Skycon icon={skycon} />
            <p>{weekDay}</p>
          </div>
          <div className="item-header-right">
            <p>{avg.minTemp}° - {avg.maxTemp}°</p>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div className="item-content">

        </div>
      </li>
    );
  }
}

export default ForecastDay;
