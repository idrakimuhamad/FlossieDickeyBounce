import * as types from '../actions/action-types';

const initialState = {
	totalPrice: 0
};

const checkoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_TOTAL_PRICE:
			return Object.assign({}, state, { totalPrice: action.price });
		default:
			return state;
	}
}

export default checkoutReducer;
