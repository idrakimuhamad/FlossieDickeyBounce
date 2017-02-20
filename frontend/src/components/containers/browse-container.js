import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdsList from '../views/ads-list';
import * as adsApi from '../../api/ads-api';

// Use name export for unconnected component test
export class BrowseContainer extends Component {
	componentDidMount() {
		adsApi.getAds();
	}

  render() {
    return (
      <AdsList loading={this.props.customerLoading} ads={this.props.ads} />
    );
  }
}

const mapStateToProps = function(store) {
	return {
		ads: store.adsState.ads,
		customerId: store.customersState.customerId,
		customer: store.customersState.customer,
		customerLoading: store.customersState.customerLoading
	};
};

export default connect(mapStateToProps)(BrowseContainer);
