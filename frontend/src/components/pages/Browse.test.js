import React from 'react';
import { shallow } from 'enzyme';
import Browse from './Browse';

function setup() {
	const props = {
		location: {
			query: {
				customer: 1
			}
		}
	};
	
	const wrapper = shallow(<Browse {...props} />)

  return {
    props,
    wrapper
  };
}

describe('components', () => {
	describe('Browse', () => {
		it('Should render itself', () => {
			const { wrapper } = setup();
			
			expect(wrapper.find('div').hasClass('browse-page')).toBe(true);
		});
	});
});
