import * as types from './action-types';

export function getCustomersRequest(loading) {
	return {
		type: types.GET_CUSTOMERS_REQUEST,
		loading
	};
}

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

export function setCustomerId(customerId) {
	return {
		type: types.SET_CUSTOMER_ID,
		customerId
	};
}