import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from '../components/Search'
import { fetchWeather } from '../actions/index';


class SearchContainer extends Component {
  render = () => <Search {...this.props} />;
}

function mapStateToProps({ weather }) {
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
