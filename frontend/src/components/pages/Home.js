import React, { Component } from 'react';
import CustomerListContainer from '../containers/customer-list-container';

export default class Home extends Component {
  render() {
    return (
      <div className="pa4 home-page">
        <h1 className="f3 lh-copy">Welkomen</h1>
        <p className="f5 lh-copy">
          Pick one of the customer to go through the checkout scenario.
        </p>
        <CustomerListContainer />
      </div>
    );
  }
}
