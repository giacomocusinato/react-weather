import React, { Component } from 'react';

import SearchContainer from '../containers/SearchContainer';
import ForecastContainer from '../containers/ForecastContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="container">
          <SearchContainer />
          <ForecastContainer />
        </div>
      </div>
    );
  }
}

export default App;
