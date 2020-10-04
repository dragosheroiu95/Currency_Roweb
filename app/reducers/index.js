import { combineReducers, createStore } from 'redux';

import exchangeRates from './exchangeRatesReducer'
import netInfo from './netInfoReducer'

const AppReducers = combineReducers({
    exchangeRates,
    netInfo
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

let store = createStore(rootReducer);

export default store;