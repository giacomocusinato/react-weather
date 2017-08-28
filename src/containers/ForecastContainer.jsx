import React, { Component } from 'react';
import { connect } from 'react-redux';

import Forecast from '../components/Forecast';


class ForecastContainer extends Component {
  render = () => <Forecast {...this.props} />;
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(ForecastContainer);
