import React, { Component } from 'react';
import store from '../../stores/store';
import { setCustomerId } from '../../actions/customer-actions';
import BrowseContainer from '../containers/browse-container';

export default class Browse extends Component {
	constructor(props) {
		super(props);
		// get the customer id
		const customerId = props.location.query && props.location.query.customer;
		
		// set the customer id
		store.dispatch(setCustomerId(customerId));
	}
	
  render() {
    return (
      <div className="pa4 browse-page">
        <h1 className="f3 lh-copy">Browse</h1>
        <p className="f5 lh-copy">
          Pick the ad package to be added into your cart
        </p>
				<BrowseContainer />
      </div>
    );
  }
}
