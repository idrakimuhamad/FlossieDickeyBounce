import React from 'react';
import { shallow } from 'enzyme';
import Browse from './Browse';

describe('components', () => {
	describe('Browse', () => {
		it('Should render itself', () => {
			const location = {
				query: {
					customer: 1
				}
			}

			const wrapper = shallow(<Browse location={location} />)

			expect(wrapper.find('div').hasClass('browse-page')).toBe(true);
			expect(wrapper.find('h1').text()).toBe('Browse');
			expect(wrapper.find('p').text()).toBe('Pick the ad package to be added into your cart');
		});
	});
});
