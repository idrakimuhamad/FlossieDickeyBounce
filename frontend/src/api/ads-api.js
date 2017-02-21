import axios from 'axios';
import store from '../stores/store';
import { getAdsRequest, getAdsSuccess, getAdSuccess, selectAd } from '../actions/ads-actions';

const endpoints = "http://localhost:1337/api";

// Get all ads
export function getAds() {
	store.dispatch(getAdsRequest(true));

	return axios.get(endpoints + '/ads')
		.then(response => {
			store.dispatch(getAdsSuccess(response.data));
			return response;
		});
}

// Get ad
export function getAd(adId) {
	store.dispatch(getAdsRequest(true));

	return axios.get(endpoints + '/ads/' + adId)
		.then(response => {
			store.dispatch(getAdSuccess(response.data));
			return response;
		});
}

// Add ad in cart
export function addToCart(adId) {
	store.dispatch(selectAd(adId));
	return adId;
}

// Get selected ads details
// export function getAdsCart(selectedAds) {
	// const checkoutAds = {
	// 	ids: [],
	// 	adsObj: []
	// };
	// const checkoutAds = [];
	// 
	// if (selectAds.length) {
	// 	selectAds.forEach((ad) => {
	// 		// get the ad details
	// 		adsApi
	// 		.getAd(ad)
	// 		.then((response) => {
	// 			const { data } = response;
	// 			
	// 			checkoutAds.push(data);
	// 		});
	// 	});
	// }
	// store.dispatch(selectAd());
	// return adId;
// }
