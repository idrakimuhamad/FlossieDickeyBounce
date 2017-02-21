import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAds, addToCart } from '../../api/ads-api';
import AdsList from '../views/ads-list';
import Button from '../views/button';

export class BrowseContainer extends Component {	
	componentDidMount() {
		getAds();
	}

	_addToCart = (adId) => (e) => {
		e.preventDefault();
		addToCart(adId);
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
				<AdsList
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
    );
  }
}

const mapStateToProps = function(store) {
	return {
		cartLoading: store.adsState.loading,
		cart: store.adsState.selectedAds,
		ads: store.adsState.ads,
		// customerId: store.customersState.customerId,
		// customer: store.customersState.customer,
		// customerLoading: store.customersState.customerLoading
	};
};

export default connect(mapStateToProps)(BrowseContainer);
