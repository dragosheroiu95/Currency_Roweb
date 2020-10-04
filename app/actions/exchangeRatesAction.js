import { connect } from 'react-redux';

import * as Actions from './actionTypes';
import { fetchExchangeRates } from '../services/apiClient';


const actions = {
    fetchExchangeRates: async (dispatch, base) => {
        dispatch({ type: Actions.FETCH_EXCHANGE_RATES_PENDING })
        const data = await fetchExchangeRates(base)
        if (data.error) {
            dispatch({ type: Actions.FETCH_EXCHANGE_RATES_ERROR })
        } else {
            dispatch({ type: Actions.FETCH_EXCHANGE_RATES_SUCCESS, exchangeRates: data.rates, fetchedDate: new Date().toISOString() })
        }
    },
    selectBase: (dispatch, base) => {
        dispatch({ type: Actions.SELECT_EXCHANGE_RATES_BASE, base })
    },
    selectTimer: (dispatch, timer) => {
        dispatch({ type: Actions.SELECT_EXCHANGE_RATES_TIMER, timer })
    }
};

export default actions;

