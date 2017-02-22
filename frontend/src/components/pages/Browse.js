import React, { Component } from 'react';
import BrowseContainer from '../containers/browse-container';

export default class Browse extends Component {
  componentDidMount() {
    if (!this.props.location.query ||
        !this.props.location.query.customer ||
        this.props.location.query.customer === 'undefined') {
      location.href = location.origin;
    }
  }
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
