import React, { Component } from 'react';
import CompleteContainer from '../containers/complete-container';

export default class Complete extends Component {
  render() {
    return (
      <div className="pa4 complete-page">
        <h1 className="f3 lh-copy">Complete</h1>
				<CompleteContainer />
      </div>
    );
  }
}
