import * as actions from './ads-actions';
import * as types from './action-types';

describe('actions', () => {
  describe('ads actions', () => {
		it('should create an action to get all ads', () => {
	    const loading = true;
	    const expectedAction = {
	      type: types.GET_ADS_REQUEST,
	      loading
	    };

	    expect(actions.getAdsRequest(loading)).toEqual(expectedAction);
	  });

		it('should create an action when receiving customers data', () => {
	    const ads = [];
	    const expectedAction = {
	      type: types.GET_ADS_SUCCESS,
	      ads
	    };

	    expect(actions.getAdsSuccess(ads)).toEqual(expectedAction);
	  });

		it('should create an action when receiving a customer data', () => {
	    const ad = {};
	    const expectedAction = {
	      type: types.GET_AD_SUCCESS,
	      ad
	    };

	    expect(actions.getAdSuccess(ad)).toEqual(expectedAction);
	  });

		it('should create an action adding an ad', () => {
	    const adId = 1;
	    const expectedAction = {
	      type: types.SET_SELECTED_ADS,
	      adId
	    };

	    expect(actions.selectAd(adId)).toEqual(expectedAction);
	  });
	})
});
