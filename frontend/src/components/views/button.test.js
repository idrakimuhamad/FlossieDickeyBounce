import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './button';

let wrapper, props;

describe('components', () => {
	describe('Button', () => {
		beforeEach(() => {
			props = {
				bgColorClass: 'bg-blue',
				colorClass: 'blue',
				radius: 2,
				className: 'custom-class',
				title: 'title',
				text: 'text',
				href: '/browse'
			};

			wrapper = shallow(<Button {...props} />);
		});

		it('Should render', () => {
			expect(wrapper.find('Link').length).toBe(1);
		});

		it('Should set the to', () => {
			const linksProp = wrapper.find('Link').props();
			expect(linksProp.to).toEqual(props.href);
		});

		it('Should set the background to the given class', () => {
			expect(wrapper.find('Link').hasClass(props.bgColorClass)).toBe(true);
		});

		it('Should set the color to the given class', () => {
			expect(wrapper.find('Link').hasClass(props.colorClass)).toBe(true);
		});

		it('Should set the borderRadius to the given value', () => {
			expect(wrapper.find('Link').hasClass('br' + props.radius)).toBe(true);
		});

		it('Should set the given custom class name', () => {
			expect(wrapper.find('Link').hasClass(props.className)).toBe(true);
		});

		it('Should set the title', () => {
			const linksProp = wrapper.find('Link').props();
			expect(linksProp.title).toEqual(props.title);
		});

		it('Should set the text', () => {
			const linksProp = wrapper.find('Link').props();
			expect(linksProp.children).toEqual(props.text);
		});
	});
});
