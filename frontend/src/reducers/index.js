import { combineReducers } from 'redux';

// Reducers
import customersReducer from './customers-reducer';

// combine reducers
const reducers = combineReducers({
	customersState: customersReducer
});

export default reducers;
