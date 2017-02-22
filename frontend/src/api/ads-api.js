import axios from 'axios';
import store from '../stores/store';
import { getAdsRequest, getAdsSuccess, getAdSuccess } from '../actions/ads-actions';
import { endpoint } from './endpoints';

// Get all ads
export function getAds() {
	store.dispatch(getAdsRequest(true));

	return axios.get(endpoint + '/ads')
		.then(response => {
			store.dispatch(getAdsSuccess(response.data));
			return response;
		})
		.catch(function (error) {
	    console.error(error);
	  });
}

// Get ad
export function getAd(adType) {
	store.dispatch(getAdsRequest(true));

	return axios.get(endpoint + '/ads/' + adType)
		.then(response => {
			store.dispatch(getAdSuccess(response.data));
			return response;
		})
		.catch(function (error) {
	    console.error(error);
	  });
}
