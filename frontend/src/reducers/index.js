import { combineReducers } from 'redux';

// Reducers
import customersReducer from './customers-reducer';
import adsReducer from './ads-reducer';

// combine reducers
const reducers = combineReducers({
	customersState: customersReducer,
	adsState: adsReducer
});

export default reducers;
