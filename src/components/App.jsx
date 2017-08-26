import React, { Component } from 'react';

import SearchContainer from '../containers/SearchContainer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
