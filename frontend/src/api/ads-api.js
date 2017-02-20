import axios from 'axios';
import store from '../stores/store';
import { getAdsRequest, getAdsSuccess, getAdSuccess } from '../actions/ads-actions';

const endpoints = "http://localhost:1337/api";

// Get all customers
export function getAds() {
	store.dispatch(getAdsRequest(true));
	
	return axios.get(endpoints + '/ads')
		.then(response => {
			store.dispatch(getAdsSuccess(response.data));
			return response;
		});
}

// Get customer
export function getAd(adId) {
	store.dispatch(getAdsRequest(true));
	
	return axios.get(endpoints + '/ads/' + adId)
		.then(response => {
			store.dispatch(getAdSuccess(response.data));
			return response;
		});
}