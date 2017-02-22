import React from 'react';
import { mount } from 'enzyme';
import AdLink from './ad-link';

const addToCart = jest.fn();

describe('components', () => {
	describe('AdLink', () => {
		it('Should renders the property inside it', () => {
			const ad = {
		    "name": "Classic Ad",
		    "adType": "classic",
		    "price": 269.99,
		    "id": 1
		  };
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
				"createdAt": "2017-02-17T07:20:18.693Z",
				"updatedAt": "2017-02-17T07:20:18.693Z",
				"id": 67
			};
			const wrapper = mount(<AdLink ad={ad} addToCart={addToCart} customer={customer} />);
      const name = wrapper.find('h5');
      const price = wrapper.find('h2 span');
      expect(name.text()).toBe('Classic Ad');
      expect(price.text()).toBe('$269.99');
    });

    it('Clicking on the AdLink should calls addToCart function', () => {
			const ad = {
		    "name": "Classic Ad",
		    "adType": "classic",
		    "price": 269.99,
		    "id": 1
		  };
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
				"createdAt": "2017-02-17T07:20:18.693Z",
				"updatedAt": "2017-02-17T07:20:18.693Z",
				"id": 67
			};
      const wrapper = mount(<AdLink ad={ad} addToCart={addToCart} customer={customer} />);

      const link = wrapper.find('.ad-item');
      link.simulate('click');
			
      expect(addToCart).toBeCalledWith(1);
    });
		
		it('Should show the classic discount display related if the customer have classic ad deal', () => {
			const ad = {
		    "name": "Classic Ad",
		    "adType": "classic",
		    "price": 269.99,
		    "id": 1
		  };
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
				"createdAt": "2017-02-17T07:20:18.693Z",
				"updatedAt": "2017-02-17T07:20:18.693Z",
				"id": 67
			};
			const wrapper = mount(<AdLink ad={ad} addToCart={addToCart} customer={customer} />);
      
			expect(wrapper.find('.classic-discount').length).toBe(1);
    });
		
		it('Should strike out the original price and show the discounted price when customers have a standout deal', () => {
      const ad = {
		    "name": "Standout Ad",
		    "adType": "standout",
		    "price": 322.99,
		    "id": 8
		  };
			const customer = {
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
		  };
			const wrapper = mount(<AdLink ad={ad} addToCart={addToCart} customer={customer} />);
      
			expect(wrapper.find('.regular-price').hasClass('strike')).toBe(true);
			expect(wrapper.find('.discount-price').length).toBe(1);
    });
		
		it('Should show the discount price when customer have a premium deal', () => {
      const ad = {
		    "name": "Premium Ad",
		    "adType": "premium",
		    "price": 394.99,
		    "createdAt": "2017-02-17T07:20:18.685Z",
		    "updatedAt": "2017-02-17T07:20:18.685Z",
		    "id": 9
		  };
			const customer = {
		    "name": "nike",
		    "deals": [
		      {
		        "name": "Premium Ads for 4 or more ads",
		        "dealsType": "premium",
		        "adId": "premium",
		        "rule": [
		          {
		            "minItem": 4,
		            "pricePerItem": 379.99
		          }
		        ]
		      }
		    ],
		    "createdAt": "2017-02-17T07:20:18.702Z",
		    "updatedAt": "2017-02-17T07:20:18.702Z",
		    "id": 69
		  };
			const wrapper = mount(<AdLink ad={ad} addToCart={addToCart} customer={customer} />);
      
			expect(wrapper.find('.premium-discount').length).toBe(1);
    });
  });
});
