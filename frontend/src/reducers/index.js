import { combineReducers } from 'redux';

// Reducers
import customersReducer from './customers-reducer';
import adsReducer from './ads-reducer';
import checkoutReducer from './checkout-reducer';

// combine reducers
const reducers = combineReducers({
	customersState: customersReducer,
	adsState: adsReducer,
	checkoutState: checkoutReducer
});

export default reducers;
