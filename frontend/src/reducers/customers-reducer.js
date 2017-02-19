import * as types from '../actions/action-types';

const initialState = {
	customers: [],
	customer: {}
};

const customersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CUSTOMERS_SUCCESS:
			return Object.assign({}, state, { customers: action.customers });

		case types.GET_CUSTOMER_SUCCESS:
			return Object.assign({}, state, { customer: action.customer });

		default:
			return state;
	}
}

export default customersReducer;
