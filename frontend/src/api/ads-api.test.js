import * as AdsApi from './ads-api';

describe('API Request', () => {
  describe('Ads API', () => {
		it('should get all ads data and return status 200', () => {
	    return AdsApi.getAds()
	    .then(response => {
	      expect(response).toBeDefined();
				expect(response.status).toEqual(200)
	    });
	  });

		it('should get an ad data and return status 200', () => {
			// this is rather hard to fixed, but assuming we gonna have a
	    return AdsApi.getAd('classic')
	    .then(response => {
	      expect(response).toBeDefined();
				expect(response.status).toEqual(200);
				expect(response.data.adType).toEqual('classic');				
	    });
	  });
	});
});
