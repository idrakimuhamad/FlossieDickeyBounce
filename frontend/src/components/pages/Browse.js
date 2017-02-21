import React, { Component } from 'react';
import BrowseContainer from '../containers/browse-container';

export default class Browse extends Component {	
  render() {
		// get the customer id
		const customerId = this.props.location.query && this.props.location.query.customer;
		
    return (
      <div className="pa4 browse-page">
        <h1 className="f3 lh-copy">Browse</h1>
        <p className="f5 lh-copy">
          Pick the ad package to be added into your cart
        </p>
				<BrowseContainer customerId={customerId} />
      </div>
    );
  }
}
