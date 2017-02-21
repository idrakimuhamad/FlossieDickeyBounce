import React from 'react';
import { mount } from 'enzyme';
import AdLink from './ad-link';

describe('components', () => {
	describe('AdLink', () => {
		it('Should renders the property inside it', () => {
      const ad = {
        id: 1,
        price: 299.99,
        name: 'Buy Milk'
      };
      const addToCart = jest.fn();

      const wrapper = mount(
        <AdLink ad={ad} addToCart={addToCart} />
      );
      const name = wrapper.find('h5');
      const price = wrapper.find('h2');
      expect(name.text()).toBe('Buy Milk');
      expect(price.text()).toBe('$299.99');
    });

    it('Clicking on the AdLink should calls addToCart function', () => {
      const addToCart = jest.fn();
      const ad = {
        id: 1,
        price: 299.99,
        name: 'Buy Milk'
      };

      const wrapper = mount(
        <AdLink ad={ad} addToCart={addToCart} />
      );

      const link = wrapper.find('.ad-item');
      link.simulate('click');
      expect(addToCart).toBeCalledWith(1);
    });
  });
});
