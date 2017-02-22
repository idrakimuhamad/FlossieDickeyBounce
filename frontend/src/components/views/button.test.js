import React from 'react';
import { mount } from 'enzyme';
import Button from './button';

let wrapper, props;

describe('components', () => {
	describe('Button', () => {
		describe('Default', () => {
			beforeEach(() => {
				props = {
					bgColorClass: 'bg-blue',
					colorClass: 'blue',
					radius: 2,
					className: 'custom-class',
					title: 'title',
					text: 'text',
					href: 'http://google.com'
				};
				
				wrapper = mount(<Button {...props} />);
			});
			
			it('Should render', () => {			
				expect(wrapper.find('.link').length).toBe(1);
			});
			
			it('Should set the href', () => {			
				expect(wrapper.find('.link[href=" + props.href + "]').length).toBe(1);
			});
			
			it('Should set the background to the given class', () => {				
				expect(wrapper.find('.link').hasClass(props.bgColorClass)).toBe(true);
			});
			
			it('Should set the color to the given class', () => {				
				expect(wrapper.find('.link').hasClass(props.colorClass)).toBe(true);
			});
			
			it('Should set the borderRadius to the given value', () => {				
				expect(wrapper.find('.link').hasClass('br' + props.radius)).toBe(true);
			});
			
			it('Should set the given custom class name', () => {				
				expect(wrapper.find('.link').hasClass(props.className)).toBe(true);
			});
			
			it('Should set the text', () => {				
				expect(wrapper.find('.link').text()).toEqual(props.text);
			});
		});
	});
});