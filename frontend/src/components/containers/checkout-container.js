import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomer } from '../../api/customer-api';
import CheckoutList from '../views/checkout-list';
import Button from '../views/button';

export class CheckoutContainer extends Component {	
	componentDidMount() {
		// get the customer details
		getCustomer(this.props.customerId);
	}
	
	_totalPrice() {
		let total = 0;
		const { cart, customer } = this.props;
		
		// get the deals with price
		if ((cart && cart.length) && 
		(customer && customer.deals && customer.deals.length)) {
			cart.forEach((cart) => {
				let { price, count, adType } = cart;
				
				customer.deals.forEach((deal) => {
					// find ads based on the type and apply the deal price
					if (deal.dealsType === 'classic' && adType === 'classic') {
						// find the minItem number and the item price for
						const { minItem, forItemPrice } = deal.rule[0];
						console.log(minItem, forItemPrice);
					} else if (deal.dealsType === 'standout' && adType === 'standout') {
						
					} else if (deal.dealsType === 'premium' && adType === 'premium') {}
				});
				
				total += (price * count);
			});
			
			
		} else {
			cart.forEach((cart) => {
				let { price, count } = cart;
				
				total += (price * count);
			});
		}
				
		return total;		
	}
	
  render() {
    return (
      <div>
				<CheckoutList
					ads={this.props.cart}
					customerId={this.props.customerId}
					customer={this.props.customer} />
				{this.props.cart.length > 0 ?
					<div>
						<div className="pv4">
							<h3 className="f3 lh-title">Total: {this._totalPrice()}</h3>
						</div>
						<div className="pv4">
							<Button
								href={'/browse?customer=' + this.props.customerId}
								title="Back to ad list"
								text="Back to ads list"
								className="mr2"
								bgColorClass="bg-mid-gray"
								/>
							<Button
								href="/complete"
								title="Checkout"
								text="Checkout"
								bgColorClass="bg-mid-gray"
								/>
						</div>
					</div>
					: null
				}				
      </div>
    );
  }
}

const mapStateToProps = function(store) {
	return {
		cart: store.adsState.selectedAds,
		ads: store.adsState.ads,
		customer: store.customersState.customer
	};
};

export default connect(mapStateToProps)(CheckoutContainer);
