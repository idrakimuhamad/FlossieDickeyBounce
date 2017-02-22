import React from 'react';
import { shallow } from 'enzyme';
import Complete from './Complete';

describe('components', () => {
	describe('Browse', () => {
		it('Should render itself', () => {
			const wrapper = shallow(<Complete />)
			
			expect(wrapper.find('div').hasClass('complete-page')).toBe(true);
			expect(wrapper.find('h1').text()).toEqual("Complete");
		});
	});
});
