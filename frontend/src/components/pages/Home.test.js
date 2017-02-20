import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('components', () => {
	describe('Home', () => {
		it('Should render itself', () => {
			const wrapper = shallow(<Home />)
			
			expect(wrapper.find('.home-page').hasClass('home-page')).toBe(true);
			expect(wrapper.find('h1').text()).toBe('Welkomen');
			expect(wrapper.find('p').text()).toBe('Pick one of the customer to go through the checkout scenario.');
		});
	});
});