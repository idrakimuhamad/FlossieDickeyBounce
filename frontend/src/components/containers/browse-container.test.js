import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { storeFake } from '../../stores/fakeStore';
import BrowseContainer from './browse-container';
import AdsList from '../views/ads-list';
import Button from '../views/button';

const addToCart = jest.fn();
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
const loading = false;

describe('components', () => {
	describe('Browse Container', () => {
		it('Should render itself and subcomponent', () => {
			let container, component, button;

			const store = storeFake({
				adsState: {
					loading: loading,
					ads: ads,
					selectedAds: []
				},
				customersState: {
					customer: customer
				}
			});

			const wrapper = mount(
				<Provider store={store}>
					<BrowseContainer />
				</Provider>
			);
			container = wrapper.find(BrowseContainer);
			component = wrapper.find(AdsList);
			button = wrapper.find(Button);
			
			const componentProps = component.props();
			const buttonProps = button.props();

			expect(container.length).toBeTruthy();
			expect(component.length).toBeTruthy();
			expect(button.length).toBeTruthy();
			expect(container.find('.customer-name').text()).toEqual(customer.name);

			expect(componentProps.customer).toEqual(customer);
			expect(componentProps.loading).toEqual(loading);
			expect(componentProps.ads).toEqual(ads);
			expect(componentProps.addToCart).toBeDefined();

			expect(buttonProps.href).toBeDefined();
			expect(buttonProps.title).toBeDefined();
			expect(buttonProps.text).toBeDefined();
			expect(buttonProps.disabled).toBeDefined();
			expect(buttonProps.bgColorClass).toBeDefined();
		});
	});
});
