import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search'


class SearchContainer extends Component {
  render = () => <Search {...this.props} />;
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(SearchContainer);
