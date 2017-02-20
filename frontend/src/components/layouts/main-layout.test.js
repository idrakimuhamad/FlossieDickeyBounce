import React from 'react';
import { shallow } from 'enzyme';
import App from './main-layout';

describe('components', () => {
	describe('Main Layout', () => {
		it('Should render itself', () => {
			const wrapper = shallow(<App />)
			
			expect(wrapper.find('.app').length).toEqual(1);
		});
	});
});
