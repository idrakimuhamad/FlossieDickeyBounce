import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { storeFake } from '../../stores/fakeStore';
import CustomerListContainer from './customer-list-container';
import CustomerList from '../views/customers-list';

const customers = [
	{
		"name": "default",
		"deals": [],
		"id": 66
	},
	{
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
	},
	{
		"name": "apple",
		"deals": [
			{
				"name": "Standout Ads for $299.99",
				"dealsType": "standout",
				"adId": "standout",
				"rule": [
					{
						"pricePerItem": 299.99
					}
				]
			}
		],
		"id": 68
	}
];
const loading = false;

describe('components', () => {
	describe('Customer List Container', () => {
		it('Should render itself and subcomponent', () => {
			let container, component;
			const store = storeFake({
				customersState: {
					customers,
					customerLoading: loading
				}
			});
			const wrapper = mount(
				<Provider store={store}>
					<CustomerListContainer />
				</Provider>
			);
			container = wrapper.find(CustomerListContainer);
			component = wrapper.find(CustomerList);
			expect(container.length).toBeTruthy();
			expect(component.length).toBeTruthy();
			const componentProps = component.props();

			expect(componentProps.loading).toBe(loading);
			expect(componentProps.customers).toEqual(customers);
		});
	});
});
