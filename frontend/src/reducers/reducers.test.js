import customersReducer from './customers-reducer';
import checkoutReducer from './checkout-reducer';
import adsReducer from './ads-reducer';
import * as types from '../actions/action-types';

describe('Reducer', () => {
  describe('Customers Reducer', () => {
		it('should return the initial state', () => {
	    expect(
	      customersReducer(undefined, {})
	    ).toEqual({
				customerLoading: false,
				customers: [],
				customer: {},
				notFound: false
			});
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
			});
	  });

		it('should handle GET_CUSTOMERS_SUCCESS', () => {
	    expect(
	      customersReducer([], {
	        type: types.GET_CUSTOMERS_SUCCESS,
	        customers: []
	      })
	    ).toEqual({
				customerLoading: false,
				customers: []
			});
	  });

		it('should handle GET_CUSTOMER_SUCCESS', () => {
	    expect(
	      customersReducer([], {
	        type: types.GET_CUSTOMER_SUCCESS,
	        customer: {}
	      })
	    ).toEqual({
				customerLoading: false,
				customer: {},
				notFound: false
			});
	  });
		
		it('should handle GET_CUSTOMER_FAIL', () => {
	    expect(
	      customersReducer([], {
	        type: types.GET_CUSTOMER_FAIL,
	        customer: null
	      })
	    ).toEqual({
				customerLoading: false,
				notFound: true
			});
	  });
	});

	describe('Checkout Reducer', () => {
		it('should return the initial state', () => {
	    expect(
	      checkoutReducer(undefined, {})
	    ).toEqual({
				totalPrice: 0
			});
	  });
	});

	describe('Ads Reducer', () => {
		it('should return the initial state', () => {
	    expect(
	      adsReducer(undefined, {})
	    ).toEqual({
				ads: [],
				ad: {},
				selectedIds: [],
				selectedAds: [],
				loading: false
			});
	  });

		it('should handle GET_ADS_REQUEST', () => {
	    expect(
	      adsReducer([], {
	        type: types.GET_ADS_REQUEST,
	        loading: true
	      })
	    ).toEqual({
				loading: true
			});
	  });

		it('should handle GET_ADS_SUCCESS', () => {
	    expect(
	      adsReducer([], {
	        type: types.GET_ADS_SUCCESS,
	        ads: []
	      })
	    ).toEqual({
				loading: false,
				ads: []
			});
	  });

		it('should handle GET_AD_SUCCESS', () => {
	    expect(
	      adsReducer([], {
	        type: types.GET_AD_SUCCESS,
	        ad: {}
	      })
	    ).toEqual({
				loading: false,
				ad: {}
			});
	  });

		it('should handle SET_SELECTED_ADS', () => {
	    expect(
	      adsReducer([], {
	        type: types.SET_SELECTED_ADS,
	        adId: 1,
	      })
	    ).toEqual({
				loading: false,
				selectedIds: [],
				selectedAds: []
			});
	  });
	});
});
