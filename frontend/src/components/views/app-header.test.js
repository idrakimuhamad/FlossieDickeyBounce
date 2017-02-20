import React from 'react';
import { shallow } from 'enzyme';
import Header from './app-header';

describe('components', () => {
	describe('Header', () => {
		it('Should render itself', () => {
			const wrapper = shallow(<Header />)
			
			expect(wrapper.find('header').hasClass('app-header')).toBe(true);
			expect(wrapper.find('h1').text()).toBe('Ad Shop');
		});
	});
});