import React from 'react';
import { mount } from 'enzyme';
import CheckoutItem from './checkout-item';

const customer = {
	classic: {
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
	standout: {
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
    "id": 24
  },
	premium: {
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
    "id": 25
  }
};

const ads = {
	classic: {
		"name": "Classic Ad",
		"adType": "classic",
		"price": 269.99,
		"id": 1,
		"count": "5"
	},
	standout: {
    "name": "Standout Ad",
    "adType": "standout",
    "price": 322.99,
    "id": 2,
		"count": "5"
  },
	premium: {
    "name": "Premium Ad",
    "adType": "premium",
    "price": 394.99,
    "id": 3,
		"count": "5"
  }
};

describe('components', () => {
	describe('CheckoutItem', () => {
		it('Should render with all the values', () => {
			const ad = ads.classic;
			const { classic } = customer;
			const priceDiscount = {
				price: 1230.99,
				haveDiscount: false
			};
			const wrapper = mount(<CheckoutItem ad={ad} customer={classic} priceDiscount={priceDiscount} />);
      const name = wrapper.find('.ad-name');
			const price = wrapper.find('.unit-price');
			const count = wrapper.find('.count');
      const itemTotalPrice = wrapper.find('.item-total-price');

      expect(name.text()).toBe(ad.name);
			expect(price.text()).toBe('$' + ad.price);
			expect(count.text()).toBe('x' + ad.count);
      expect(itemTotalPrice.text()).toBe('$' + priceDiscount.price);
    });

		it('Should show the discount label when item fit the deals', () => {
			const ad = ads.classic;
			const { classic } = customer;
			const priceDiscount = {
				price: 1230.99,
				haveDiscount: true
			};
			const wrapper = mount(<CheckoutItem ad={ad} customer={classic} priceDiscount={priceDiscount} />);
      const discount = wrapper.find('.discount-label');

      expect(discount.text()).toEqual('Discounted');
    });
	});
});
