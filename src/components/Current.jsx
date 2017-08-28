import React, { Component } from 'react';


class Current extends Component {
  render() {
    if (this.props.weather.hasErrored) {
      return <p>Error</p>;
    }

    if (this.props.weather.isLoading || !this.props.weather.data) {
      return <p>Loading...</p>
    }


    const { location, current } = this.props.weather.data;

    return (
      <p>{location.name}</p>
    );
  }

}

export default Current;
