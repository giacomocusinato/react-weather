import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Skycons = require('skycons')(window);


class Skycon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skycons: new Skycons({'color': '#333'})
    };
  }

  componentDidMount() {
    this.state.skycons.add(
      ReactDOM.findDOMNode(this), Skycons[this.props.icon]
    );

    this.state.skycons.play();
  }

  componentWillReceiveProps(nextProps) {
    this.state.skycons.set(ReactDOM.findDOMNode(this), Skycons[nextProps.icon]);
  }

  componentWillUnmount() {
    this.state.skycons.pause();
    this.state.skycons.remove(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <canvas className={this.props.class} />
    );
  }
}


export default Skycon;
