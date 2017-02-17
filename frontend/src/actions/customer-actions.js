import * as types from './action-types';

export function getCustomersSuccess(customers) {
	return {
		type: types.GET_CUSTOMERS_SUCCESS,
		customers
	};
}

export function getCustomerSuccess(customer) {
	return {
		type: types.GET_CUSTOMER_SUCCESS,
		customer
	};
}