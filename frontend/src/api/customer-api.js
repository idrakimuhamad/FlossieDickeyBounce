import axios from 'axios';
import store from '../stores/store';
import { getCustomersRequest, getCustomersSuccess, getCustomerSuccess, getCustomerFail } from '../actions/customer-actions';
import { endpoint } from './endpoints';

// Get all customers
export function getCustomers() {
	store.dispatch(getCustomersRequest(true));

	return axios.get(endpoint + '/customers')
		.then(response => {
			store.dispatch(getCustomersSuccess(response.data));
			return response;
		})
		.catch(function (error) {
	    console.error(error);
	  });
}

// Get customer
export function getCustomer(name) {
	store.dispatch(getCustomersRequest(true));

	return axios.get(endpoint + '/customers/' + name)
		.then(response => {
			store.dispatch(getCustomerSuccess(response.data));
			
			return response;
		})
		.catch(function (error) {
	    store.dispatch(getCustomerFail(null));
	  });
}
