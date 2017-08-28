import React, { Component } from 'react';

import { getWeekDay } from '../utils/DateUtils';


class ForecastDay extends Component {
  render() {
    return (
      <li className="list-group-item">
        <p>{getWeekDay(this.props.date)}</p>
      </li>
    );
  }
}

export default ForecastDay;
