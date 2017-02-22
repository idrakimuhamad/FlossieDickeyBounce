import * as types from './action-types';
import * as actions from './checkout-actions';

describe('actions', () => {
  describe('checkout actions', () => {
		it('should create an action to set the total price', () => {
	    const price = 299.99;
	    const expectedAction = {
	      type: types.SET_TOTAL_PRICE,
	      price
	    };

	    expect(actions.setTotalPrice(price)).toEqual(expectedAction);
	  });
	})
});
