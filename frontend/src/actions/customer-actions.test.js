import * as types from './action-types';
import * as actions from './customer-actions';


describe('actions', () => {
	describe('customer actions', () => {
		it('should create an action when requesting for customer data', () => {
			const loading = true;
	    const expectedAction = {
	      type: types.GET_CUSTOMERS_REQUEST,
	      loading
	    };

	    expect(actions.getCustomersRequest(loading)).toEqual(expectedAction);
		});

		it('should create an action when receiving customers data', () => {
			const customers = [];
	    const expectedAction = {
	      type: types.GET_CUSTOMERS_SUCCESS,
	      customers
	    };

	    expect(actions.getCustomersSuccess(customers)).toEqual(expectedAction);
		});

		it('should create an action when receiving a customer data', () => {
			const customer = {};
	    const expectedAction = {
	      type: types.GET_CUSTOMER_SUCCESS,
	      customer
	    };

	    expect(actions.getCustomerSuccess(customer)).toEqual(expectedAction);
		});
	})
});
