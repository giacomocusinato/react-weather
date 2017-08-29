import React, { Component } from 'react';

import Skycon from './Skycon';
import Sparkline from './Sparkline';
import { getWeekDay } from '../utils/DateUtils';
import { getDayIcon, getDayDescription, flattenTemps, averages } from '../utils/WeatherUtils';
import { getSkycon } from '../utils/WeatherIconUtils';

class ForecastDay extends Component {
  constructor() {
    super();

    this.state = {
      opened: false
    };
  }

  handleOpenClick = () =>
    this.setState({
      opened: !this.state.opened
    });

  render() {
    const forecasts = this.props.forecasts;
    const skycon = getSkycon(getDayIcon(forecasts), true);
    const weekDay = getWeekDay(this.props.date);
    const avg = averages(forecasts);
    const description = getDayDescription(forecasts);

    let dayClass = 'list-group-item forecast-day';
    let contentClass = 'day-content d-none';
    if (this.state.opened) {
      dayClass += ' opened';
      contentClass += 'd-block';
    }

    return (
      <li className={dayClass}>
        <div className="day-header">
          <Skycon icon={skycon} class="skycon-small" />
          <p className="week-day">
            {weekDay}
          </p>
          <p className="avg">
            {avg.temp}°
          </p>
          {this.state.opened ?
            <i className="fa fa-minus-circle" onClick={this.handleOpenClick} /> :
            <i className="fa fa-plus-circle" onClick={this.handleOpenClick} />}
        </div>
        <hr />
        <div className={contentClass}>
          <p className="description">
            {description}
          </p>
          <table className="table">
            <tbody>
              <tr>
                <td>Humidity</td><td>{avg.humidity}%</td>
                <td>Clouds</td>
                <td>{avg.clouds}%</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{avg.pressure} hPa</td>
                <td>Wind</td><td>{avg.wind} km/h</td>
              </tr>
            </tbody>
          </table>
          <Sparkline
            data={flattenTemps(forecasts)}
            avg={avg.temp} />
        </div>
      </li>
    );
  }
}

export default ForecastDay;
