import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import store from '../../stores/store';
import { setTotalPrice } from '../../actions/checkout-actions';
import { getCustomer } from '../../api/customer-api';
import CheckoutItem from '../views/checkout-item';
import Button from '../views/button';

export class CheckoutContainer extends Component {
	componentDidMount() {
		// get the customer details
		getCustomer(this.props.customerId);

		// calculate total price
		this._dispatchPrice();
	}

	// total price calculation, including discounts
	// this, ideally should be done by the backend,
	// so the client could only make the request and get the final value
	// for this test this is delegate to the client side due to time constraint
	_totalPrice() {
		let total = 0;
		const { cart, customer } = this.props;

		// get the deals with price
		if (cart && cart.length) {
			cart.forEach((c) => {
				let { price, count, adType } = c;

				const customersRule = customer && _.find(customer.deals, { dealsType: adType });

				if (customersRule) {
					total += this._priceRule(customersRule, price, count);
				} else {
					total += this._calculateNormalPrice(price, count);
				}
			});
		}

		return total;
	}

	_priceRule = (customersRule, price, count) => {
		let finalPrice = 0;

		if (customersRule.dealsType === 'classic') {

			// find the minItem number and the item price for
			const { minItem, forItemPrice } = customersRule.rule[0];

			if (minItem && forItemPrice) {

				// make sure that the selected ads meet the minimum number of item
				// we also have to take into the account of multiple items,
				// eg 3 items for the price of 2
				// 6 items for the price of 4
				// 5 items with discounted price for 3 of the items, while the
				// other 2 at the same price
				if (count >= minItem) {
					const notDiscounted = count % minItem;
					const discountedPrice = ((count - (count % minItem)) / minItem) * forItemPrice * price;
					finalPrice += (notDiscounted * price) + discountedPrice;
				} else {
					finalPrice += this._calculateNormalPrice(price, count);
				}
			}
		} else if (customersRule.dealsType === 'standout') {
			const { pricePerItem } = customersRule.rule[0];

			if (pricePerItem) {
				finalPrice += pricePerItem * count;
			}
		} else if (customersRule.dealsType === 'premium') {
			const { minItem, pricePerItem } = customersRule.rule[0];

			if (minItem && pricePerItem) {
				if (count >= minItem) {
					finalPrice += pricePerItem * count;
				} else {
					finalPrice += this._calculateNormalPrice(price, count);
				}
			}
		}

		return finalPrice;
	}

	_calculateNormalPrice = (price, count) => {
		return parseFloat(this._fixedDecimal(price * count));
	}

	_totalPriceItemDiscount = (customer, ad) => {
		const deals = customer && customer.deals;
		const customersRule = deals && _.find(deals, {
		  dealsType: ad.adType });
		let price = 0, haveDiscount = false;

		if (customersRule) {
		  price += this._priceRule(customersRule, ad.price, ad.count);

		  // if different price, assume there's discount
		  if (price !== this._calculateNormalPrice(ad.price, ad.count)) {
		    haveDiscount = !haveDiscount;
		  }
		} else {
		  price += this._calculateNormalPrice(ad.price, ad.count);
		}

		return {
			price, haveDiscount
		};
	}

	_dispatchPrice = () => {
		const finalPrice = this._fixedDecimal(this._totalPrice());
		store.dispatch(setTotalPrice(finalPrice));
	}

	_fixedDecimal = (number) => {
		return number.toFixed(2);
	}

  render() {
    return (
      <div>
				<div className="checkout-list mw8">
					{this.props.cart.length === 0 ?
						<p className="f5 lh-copy no-item-selected">
							You have no item added into the cart. <Link to={'/browse?customer=' + this.props.customer.id}>
							Go back to the browse page</Link> to pick you package.
						</p>
						:
						this.props.cart.map(ad => {
			        return (
								<CheckoutItem
									key={ad.id}
									ad={ad}
									priceDiscount={this._totalPriceItemDiscount(this.props.customer, ad)}
								 />
			        );
			      })
					}
		    </div>
				{this.props.cart.length > 0 ?
					<div className="checkout-footer">
						<div className="mt4">
							<h3 className="f3 lh-title total-price">Total: ${this.props.totalPrice}</h3>
						</div>
						<div className="mt4">
							<Button
								href={'/browse?customer=' + this.props.customerId}
								title="Back to ads list"
								text="Back to ads list"
								className="mr2 back-to-browse"
								bgColorClass="bg-mid-gray"
								/>
							<Button
								href="/complete"
								title="Checkout"
								text="Checkout"
								className="checkout"
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
		customer: store.customersState.customer,
		totalPrice: store.checkoutState.totalPrice
	};
};

export default connect(mapStateToProps)(CheckoutContainer);
