import React from 'react';
import { shallow } from 'enzyme';
import CustomerList from './customers-list';

function setup() {
	const props = {
		loading: true,
		customers: [
			{
				"name": "default",
				"deals": [],
				"createdAt": "2017-02-17T07:20:18.689Z",
				"updatedAt": "2017-02-17T07:20:18.689Z",
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
				"createdAt": "2017-02-17T07:20:18.693Z",
				"updatedAt": "2017-02-17T07:20:18.693Z",
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
				"createdAt": "2017-02-17T07:20:18.698Z",
				"updatedAt": "2017-02-17T07:20:18.698Z",
				"id": 68
			}
		]
	};

	const wrapper = shallow(<CustomerList {...props} />);

	return {
		props,
		wrapper
	};
}

describe('components', () => {
	describe('Customer List', () => {
		it('Should render itself and subcomponent', () => {
			const { wrapper, props } = setup();

			expect(wrapper.find('.data-list').length).toEqual(1);

			const LinkProps = wrapper.find('Link').first().props();

			expect(LinkProps.to).toEqual('/browse?customer=' + props.customers[0].name);
			expect(LinkProps.children).toEqual(props.customers[0].name);
		});

		it('Should render loading when loading is true', () => {
			const { wrapper } = setup();
			expect(wrapper.find('.loading-text').text()).toEqual('Loading...');
		});

		it('Should not render loading when loading is false', () => {
			const { props } = setup();
			props.loading = !props.loading;
			const notLoadingWrapper = shallow(<CustomerList {...props} />);

			expect(notLoadingWrapper.find('.loading-text').length).toBe(0);
		});

		it('Should render at least 1 customer', () => {
			const { wrapper } = setup();

			expect(wrapper.find('Link').length).toBeGreaterThan(0);
		});
	});
});
