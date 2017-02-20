import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as adsApi from '../../api/ads-api';
import AdsList from '../views/ads-list';
import CartCount from '../views/cart-count';

export class BrowseContainer extends Component {
	componentDidMount() {
		adsApi.getAds();
	}

	_addToCart = (adId) => (e) => {
		e.preventDefault();
		adsApi.addToCart(adId);
		console.log(this.props);
	}

  render() {
		console.log(this.props);
    return (
      <div>
				<AdsList
					loading={this.props.customerLoading}
					ads={this.props.ads}
					addToCart={this._addToCart} />
				<CartCount
					cart={this.props.cart} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
	return {
		cartLoading: store.adsState.loading,
		cart: store.adsState.selectedAds,
		ads: store.adsState.ads,
		customerId: store.customersState.customerId,
		customer: store.customersState.customer,
		customerLoading: store.customersState.customerLoading
	};
};

export default connect(mapStateToProps)(BrowseContainer);
