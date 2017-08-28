import React, { Component } from 'react';
import { connect } from 'react-redux';

import Current from '../components/Current';


class CurrentContainer extends Component {
  render = () => <Current {...this.props} />;
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(CurrentContainer);
