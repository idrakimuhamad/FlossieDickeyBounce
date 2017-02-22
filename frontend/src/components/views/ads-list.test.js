import React from 'react';
import { mount } from 'enzyme';
import AdsList from './ads-list';

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

describe('components', () => {
	describe('AdList', () => {
		it('Should renders itself', () => {
			const wrapper = mount(<AdsList ads={ads} addToCart={addToCart} customer={customer} />);
			
      expect(wrapper.find('.ads-list').length).toBe(1);
    });
		
		it('Should render loading when loading', () => {			
			const wrapper = mount(<AdsList loading={true} ads={ads} addToCart={addToCart} customer={customer} />);
			
      expect(wrapper.find('.loading').text()).toEqual('Loading...');
    });
	});
});