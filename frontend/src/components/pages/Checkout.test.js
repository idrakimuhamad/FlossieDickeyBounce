import React from 'react';
import { shallow } from 'enzyme';
import Checkout from './Checkout';

describe('components', () => {
	describe('Checkout', () => {
		it('Should render itself', () => {
			const location = {
				query: {
					customer: 1
				}
			}

			const wrapper = shallow(<Checkout location={location} />)

			expect(wrapper.find('div').hasClass('checkout-page')).toBe(true);
			expect(wrapper.find('h1').text()).toBe('Checkout');
			expect(wrapper.find('p').text()).toBe('Below are the list of ads package that you\'ve selected, and the total value to be pay.');
		});
	});
});
