import * as types from './action-types';

export function getAdsRequest(loading) {
	return {
		type: types.GET_ADS_REQUEST,
		loading
	};
}

export function getAdsSuccess(ads) {
	return {
		type: types.GET_ADS_SUCCESS,
		ads
	};
}

export function getAdSuccess(ad) {
	return {
		type: types.GET_AD_SUCCESS,
		ad
	};
}

export function selectAd(adId) {
	return {
		type: types.SET_SELECTED_ADS,
		adId
	};
}
