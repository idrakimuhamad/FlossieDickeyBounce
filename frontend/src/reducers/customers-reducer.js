import * as types from '../actions/action-types';

const initialState = {
	customerLoading: false,
	customers: [],
	customer: {},
	notFound: false
};

const customersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CUSTOMERS_REQUEST:
			return Object.assign({}, state, { customerLoading: action.loading, customers: [], customer: {} });

		case types.GET_CUSTOMERS_SUCCESS:
			return Object.assign({}, state, { customerLoading: false, customers: action.customers });

		case types.GET_CUSTOMER_SUCCESS:
			return Object.assign({}, state, { customerLoading: false, customer: action.customer, notFound: false });
			
		case types.GET_CUSTOMER_FAIL:
			return Object.assign({}, state, { customerLoading: false, notFound: true });

		default:
			return state;
	}
}

export default customersReducer;
