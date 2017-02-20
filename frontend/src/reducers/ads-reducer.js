import * as types from '../actions/action-types';

const initialState = {
	ads: [],
	ad: {},
	selectedAds: [],
	loading: false
};

const adsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ADS_REQUEST:
			return Object.assign({}, state, { loading: action.loading, ads: [], ad: {} });

		case types.GET_ADS_SUCCESS:
			return Object.assign({}, state, { loading: false, ads: action.ads });

		case types.GET_AD_SUCCESS:
			return Object.assign({}, state, { loading: false, ad: action.ad });

		case types.SET_SELECTED_ADS:
			const { selectedAds } = state;

			return Object.assign({}, state, { loading: false, selectedAds: [...selectedAds, action.adId] });

		default:
			return state;
	}
}

export default adsReducer;
