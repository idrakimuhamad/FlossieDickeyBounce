import React from 'react';
import { mount } from 'enzyme';
import Header from './app-header';

describe('components', () => {
	describe('Header', () => {
		it('Should render itself', () => {
			const wrapper = mount(<Header />)
			
			expect(wrapper.find('header').hasClass('app-header')).toBe(true);
		});
		
		it('The anchor should point to root with "Ad Shop" text', () => {
			const wrapper = mount(<Header />);	
			
			expect(wrapper.find('a').text()).toBe('Ad Shop');
			expect(wrapper.find({ href: '/' }).length).toBe(1);
		});
	});
});