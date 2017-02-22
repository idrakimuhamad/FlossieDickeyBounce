import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { storeFake } from '../../stores/fakeStore';
import BrowseContainer from './browse-container';
import CheckoutContainer from './checkout-container';
import CheckoutItem from '../views/checkout-item';
import Button from '../views/button';

const ads = [
	{
		"name": "Classic Ad",
		"adType": "classic",
		"price": 269.99,
		"id": 7
	},
	{
		"name": "Standout Ad",
		"adType": "standout",
		"price": 322.99,
		"id": 8
	},
	{
		"name": "Premium Ad",
		"adType": "premium",
		"price": 394.99,
		"id": 9
	}
];

const customer = {
	"name": "unilever",
	"deals": [
		{
			"name": "3 for 2 deals on Classic Ads",
			"dealsType": "classic",
			"adId": "classic",
			"rule": [
				{
					"minItem": 3,
					"forItemPrice": 2
				}
			]
		}
	],
	"id": 67
};

const cart = [
	{
		"name": "Classic Ad",
		"adType": "classic",
		"price": 269.99,
		"id": 7,
		"count": 4
	},
	{
		"name": "Standout Ad",
		"adType": "standout",
		"price": 322.99,
		"id": 8,
		"count": 3
	},
	{
		"name": "Premium Ad",
		"adType": "premium",
		"price": 394.99,
		"id": 9,
		"count": 5
	}
];
const totalPrice = 1234.99;

describe('components', () => {
	describe('Checkout Container', () => {
		it('Should render itself and subcomponent', () => {
			let container, component, buttonBrowse, buttonCheckout;

			const store = storeFake({
				adsState: {
					selectedAds: cart,
					ads
				},
				customersState: {
					customer
				},
				checkoutState: {
					totalPrice
				}
			});

			const wrapper = mount(
				<Provider store={store}>
					<CheckoutContainer />
				</Provider>
			);
			container = wrapper.find(CheckoutContainer);
			component = wrapper.find(CheckoutItem);
			buttonBrowse = wrapper.find('.back-to-browse');
			buttonCheckout = wrapper.find('.checkout');

			const componentProps = component.props();
			const buttonBrowseProps = buttonBrowse.props();
			const buttonCheckoutProps = buttonCheckout.props();

			expect(container.length).toBeTruthy();
			expect(component.length).toBeTruthy();
			expect(button.length).toBeTruthy();
			expect(container.find('.total-price').text()).toEqual('$' + totalPrice);

			expect(componentProps.ad).toBeDefined();
			expect(componentProps.priceDiscount).toBeDefined();

			expect(buttonBrowseProps.href).toContain('/browse?customer=');
			expect(buttonBrowseProps.title).toEqual('Back to ads list');
			expect(buttonBrowseProps.text).toEqual('Back to ads list');
			expect(buttonBrowseProps.disabled).toBeUndefined();
			expect(buttonBrowseProps.bgColorClass).toEqual('bg-mid-gray');

			expect(buttonCheckoutProps.href).toEqual('/complete');
			expect(buttonCheckoutProps.title).toEqual('Checkout');
			expect(buttonCheckoutProps.text).toEqual('Checkout');
			expect(buttonCheckoutProps.disabled).toBeUndefined();
			expect(buttonCheckoutProps.bgColorClass).toEqual('bg-mid-gray');
		});

		it('Should render message when cart is empty, and hide checkout footers', () => {
			let container;

			const store = storeFake({
				adsState: {
					selectedAds: [],
					ads
				},
				customersState: {
					customer
				},
				checkoutState: {
					totalPrice
				}
			});

			const wrapper = mount(
				<Provider store={store}>
					<CheckoutContainer />
				</Provider>
			);
			const message = wrapper.find(CheckoutContainer).find('.no-item-selected');
			const footer = wrapper.find(CheckoutContainer).find('.checkout-footer');

			expect(message.length).toBeTruthy();
			expect(footer.length).toBeFalsy();
		});
	});
});
