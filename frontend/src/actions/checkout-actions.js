import * as types from './action-types';

export function setTotalPrice(price) {
	return {
		type: types.SET_TOTAL_PRICE,
		price
	};
}