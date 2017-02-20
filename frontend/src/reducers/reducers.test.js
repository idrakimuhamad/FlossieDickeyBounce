import customersReducer from './customers-reducer';
import * as types from '../actions/action-types';

const customers = [
	{
		name: 'Dummy object'
	}, {
		name: 'Dummy object #2'
	}
];
const customer = { name: 'Dummy object' };

describe('customer reducer', () => {
	it('should return the initial state', () => {
		expect(
			customersReducer(undefined, {})
		).toEqual({
				customerLoading: false,
				customers: [],
				customer: {}
			}
		);
	});
	
	it('should handle GET_CUSTOMERS_REQUEST', () => {
		expect(
			customersReducer([], {
				type: types.GET_CUSTOMERS_REQUEST,
				loading: true
			})
		).toEqual({
				customerLoading: true,
				customers: [],
				customer: {}
			}
		);
	});
	
	it('should handle GET_CUSTOMERS_SUCCESS', () => {
		expect(
			customersReducer([], {
				type: types.GET_CUSTOMERS_SUCCESS,
				customers
			})
		).toEqual({
			customerLoading: false,
			customers
		})
	});
	
	it('should handle GET_CUSTOMER_SUCCESS', () => {
		expect(
			customersReducer([], {
				type: types.GET_CUSTOMER_SUCCESS,
				customer
			})
		).toEqual({
			customerLoading: false,
			customer
		})
	});
});