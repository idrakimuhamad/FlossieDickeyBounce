import React, { Component } from 'react';
import CheckoutContainer from '../containers/checkout-container';

export default class Checkout extends Component {
  render() {
		// get the customer id
		const customerId = this.props.location.query && this.props.location.query.customer;
		
    return (
      <div className="pa4 checkout-page">
        <h1 className="f3 lh-copy">Checkout</h1>
        <p className="f5 lh-copy">
          Below are the list of ads package that you've selected, and the total value to be pay.
        </p>
				<CheckoutContainer
				 	customerId={customerId} />
      </div>
    );
  }
}
