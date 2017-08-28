import React, { Component } from 'react';

import Header from './Header';
import SearchContainer from '../containers/SearchContainer';
import CurrentContainer from '../containers/CurrentContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchContainer />
          <CurrentContainer />
        </div>
      </div>
    );
  }
}

export default App;
