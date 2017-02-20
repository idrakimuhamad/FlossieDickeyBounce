import axios from 'axios';
import * as types from './action-types';
import * as actions from './customer-actions';
import * as customerApi from '../api/customer-api';
import store from '../stores/store';

const endpoints = "http://localhost:1337/api";
const customers = [
	{
		"name": "default",
		"deals": [],
		"createdAt": "2017-02-17T07:20:18.689Z",
		"updatedAt": "2017-02-17T07:20:18.689Z",
		"id": 66
	},
	{
		"name": "unilever",
		"deals": [
			{
				"name": "3 for 2 deals on Classic Ads",
				"dealsType": "classic",
				"adId": "classic",
				"rule": [
					{
						"minItem": 3,
						"forItemPrice": 2
					}
				]
			}
		],
		"createdAt": "2017-02-17T07:20:18.693Z",
		"updatedAt": "2017-02-17T07:20:18.693Z",
		"id": 67
	},
	{
		"name": "apple",
		"deals": [
			{
				"name": "Standout Ads for $299.99",
				"dealsType": "standout",
				"adId": "standout",
				"rule": [
					{
						"pricePerItem": 299.99
					}
				]
			}
		],
		"createdAt": "2017-02-17T07:20:18.698Z",
		"updatedAt": "2017-02-17T07:20:18.698Z",
		"id": 68
	}
];
const customer = {
	"name": "apple",
	"deals": [
		{
			"name": "Standout Ads for $299.99",
			"dealsType": "standout",
			"adId": "standout",
			"rule": [
				{
					"pricePerItem": 299.99
				}
			]
		}
	],
	"createdAt": "2017-02-17T07:20:18.698Z",
	"updatedAt": "2017-02-17T07:20:18.698Z",
	"id": 68
};

describe('actions', () => {	
	it('create GET_CUSTOMERS_REQUEST when fetching customers', () => {
		const loading = true;
		const expectedAction = { type: types.GET_CUSTOMERS_REQUEST, loading };		
		expect(actions.getCustomersRequest(loading)).toEqual(expectedAction);		 
	});
	
	it('create GET_CUSTOMERS_SUCCESS when fetching customers has been done', () => {		
		const expectedAction = { type: types.GET_CUSTOMERS_SUCCESS, customers };		
		expect(actions.getCustomersSuccess(customers)).toEqual(expectedAction);		 
	});
	
	it('create GET_CUSTOMER_SUCCESS when fetching customer has been done', () => {		
		const expectedAction = { type: types.GET_CUSTOMER_SUCCESS, customer };		
		expect(actions.getCustomerSuccess(customer)).toEqual(expectedAction);
	});
});
