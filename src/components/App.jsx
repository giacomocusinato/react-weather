import React, { Component } from 'react';

import Header from './Header';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search />          
        </div>
      </div>
    );
  }
}

export default App;
