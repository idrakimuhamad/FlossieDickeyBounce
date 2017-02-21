import * as types from '../actions/action-types';

const initialState = {
	ads: [],
	ad: {},
	selectedIds: [],
	selectedAds: [],
	loading: false
};

const adsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ADS_REQUEST:
			return Object.assign({}, state, { loading: action.loading });

		case types.GET_ADS_SUCCESS:
			return Object.assign({}, state, { loading: false, ads: action.ads });

		case types.GET_AD_SUCCESS:
			return Object.assign({}, state, { loading: false, ad: action.ad });

		case types.SET_SELECTED_ADS:
			const { ads, selectedIds, selectedAds } = state;
			let newSelectedId = [];
			let newSelectedAds = [];
			let adDetails = null;
			
			if (selectedIds.indexOf(action.adId) < 0) {
				
				// find the ad
				for (let i = 0; i < ads.length; i++) {
					if (ads[i].id === action.adId) {
						adDetails = ads[i];
						adDetails.count = 1;
						newSelectedId = [ ...selectedIds, action.adId ];
						newSelectedAds = [ ...selectedAds, adDetails ];
					}
				}
			} else {
				newSelectedId = [ ...selectedIds ];
				newSelectedAds = [ ...selectedAds ];
				newSelectedAds.forEach((ad) => {
					if (ad.id === action.adId) {
						ad.count += 1;
					}
				});
			}

			return Object.assign({}, state, { loading: false, selectedIds: newSelectedId, selectedAds: newSelectedAds });

		default:
			return state;
	}
}

export default adsReducer;
