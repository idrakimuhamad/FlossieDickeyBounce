import axios from 'axios';
import store from '../stores/store';
import { getCustomersSuccess, getCustomerSuccess } from '../actions/customer-actions';

const endpoints = "http://localhost:1337/api";

// Get all customers
export function getCustomers() {
	return axios.get(endpoints + '/customers')
		.then(response => {
			store.dispatch(getCustomersSuccess(response.data));
			return response;
		});
}

// Get customer
export function getCustomer(customerId) {
	return axios.get(endpoints + '/customers/' + customerId)
		.then(response => {
			store.dispatch(getCustomerSuccess(response.data));
			return response;
		});
}