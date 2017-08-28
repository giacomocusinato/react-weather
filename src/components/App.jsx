import React, { Component } from 'react';

import Header from './Header';
import SearchContainer from '../containers/SearchContainer';
import ForecastContainer from '../containers/ForecastContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchContainer />
          <ForecastContainer />
        </div>
      </div>
    );
  }
}

export default App;
