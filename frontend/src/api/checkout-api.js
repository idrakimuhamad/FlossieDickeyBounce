import store from '../stores/store';
import { setTotalPrice } from '../actions/checkout-actions';

// set the total price
export function setPrice(price) {
	store.dispatch(setTotalPrice(price));
}
