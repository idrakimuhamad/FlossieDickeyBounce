import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../stores/store';
import { selectAd } from '../../actions/ads-actions';
import { getAds } from '../../api/ads-api';
import { getCustomer } from '../../api/customer-api';
import AdsList from '../views/ads-list';
import Button from '../views/button';

export class BrowseContainer extends Component {
	componentDidMount() {
		getAds();
		getCustomer(this.props.customerId);
	}

	_addToCart = (adId) => (e) => {
		e.preventDefault();
		store.dispatch(selectAd(adId));
	}

  render() {
		const { cart } = this.props;
		let total = 0;

		cart.forEach((c) => {
			total += c.count;
		});

		const canCheckout = this.props.cart && this.props.cart.length > 0;
		const checkoutUrl = canCheckout ? '/checkout?customer=' + this.props.customerId : '';
		const checkoutText = canCheckout ? total + ' item'
																			+ (total > 1 ? 's' : '')
																			+ ' added. Checkout now' : '0 item';
		const checkoutTitle = canCheckout ? total + ' item'
																			+ (total > 1 ? 's' : '')
																			+ ' in the cart' : 'No item added yet';
    return (
      <div>
        <h1 className="f3 lh-copy">Browse (as <span className="ttc customer-name">{this.props.customer.name}</span>)</h1>
        <p className="f5 lh-copy">
          Pick the ad package to be added into your cart
        </p>
				<div className="ads-list-container">
					<AdsList
						customer={this.props.customer}
						loading={this.props.cartLoading}
						ads={this.props.ads}
						addToCart={this._addToCart} />
					<div className="pv2">
						<Button
							href={checkoutUrl}
							title={checkoutTitle}
							text={checkoutText}
							disabled={canCheckout}
							bgColorClass="bg-mid-gray"
							/>
					</div>
				</div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
	return {
		cartLoading: store.adsState.loading,
		cart: store.adsState.selectedAds,
		ads: store.adsState.ads,
		customer: store.customersState.customer
	};
};

export default connect(mapStateToProps)(BrowseContainer);
