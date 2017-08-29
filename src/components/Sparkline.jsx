import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Sparkline extends Component {
  render() {
    if (this.props.data.length < 2) {
      return <span></span>;
    }

    return (
      <div className="sparkline">
        <Sparklines height={50} width={50} data={this.props.data}>
          <SparklinesLine color="#FFD400" />
        </Sparklines>
        <p>
          Avarage: {this.props.avg}° 
        </p>
      </div>
    );
  }

}

export default Sparkline;
