import { connect } from 'react-redux';
import moment from 'moment';

import { ApiClient } from '../services/apiClient';
import * as Actions from './actionTypes';


const actions = {
    fetchExchangeRates: async (dispatch, base) => {
        dispatch({ type: Actions.FETCH_EXCHANGE_RATES_PENDING })
        const data = await ApiClient.fetchExchangeRates(base)
        if (data.error) {
            dispatch({ type: Actions.FETCH_EXCHANGE_RATES_ERROR })
        } else {
            dispatch({ type: Actions.FETCH_EXCHANGE_RATES_SUCCESS, exchangeRates: data.rates, fetchedDate: new Date().toISOString() })
        }
    },
    fetchPastExchangeRates: async (dispatch, symbols = 'RON,USD') => {
        const start_at = moment().subtract(10, 'days').format('YYYY-MM-DD');
        const end_at = moment().format('YYYY-MM-DD');
        dispatch({ type: Actions.FETCH_PAST_EXCHANGE_RATES_PENDING })
        const data = await ApiClient.fetchPastExchangeRates(symbols, start_at, end_at)
        if (data.error) {
            dispatch({ type: Actions.FETCH_PAST_EXCHANGE_RATES_ERROR })
        } else {
            dispatch({ type: Actions.FETCH_PAST_EXCHANGE_RATES_SUCCESS, pastExchangeRates: data.rates })
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

