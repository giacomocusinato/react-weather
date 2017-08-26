import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h1 className="navbar-brand">React Weather</h1>
        <i className="fa fa-cog"></i>
      </nav>
    );
  }
}

export default Header;
