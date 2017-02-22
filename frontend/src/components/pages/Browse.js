import React, { Component } from 'react';
import BrowseContainer from '../containers/browse-container';

export default class Browse extends Component {	
  render() {
		// get the customer id
		const customerId = this.props.location.query && this.props.location.query.customer;
		
    return (
      <div className="pa4 browse-page">
				<BrowseContainer customerId={customerId} />
      </div>
    );
  }
}
