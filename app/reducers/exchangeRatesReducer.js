import * as Actions from '../actions/actionTypes';

const initialState = {
    pastExchangeRates: null,
    exchangeRates: null,
    isFetching: false,
    isFetchingPastRates: false,
    fetchedDate: null,
    currencies: ['RON', 'USD', 'EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR'],
    availableIntervals: [3000, 5000, 15000],
    base: 'EUR',
    timer: 3000
};

const ExchangeRatesReducer = (state = initialState, action) => {

    const { exchangeRates, fetchedDate, timer, base, pastExchangeRates } = action;

    switch (action.type) {
        case Actions.SELECT_EXCHANGE_RATES_TIMER: {
            return {
                ...state,
                timer
            }
        }
        case Actions.SELECT_EXCHANGE_RATES_BASE: {
            return {
                ...state,
                base
            }
        }
        case Actions.FETCH_EXCHANGE_RATES_PENDING:
            return {
                ...state,
                isFetching: true
            };
        case Actions.FETCH_EXCHANGE_RATES_SUCCESS:
            return {
                ...state,
                exchangeRates,
                fetchedDate,
                isFetching: false
            };
        case Actions.FETCH_EXCHANGE_RATES_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case Actions.FETCH_PAST_EXCHANGE_RATES_PENDING:
            return {
                ...state,
                isFetchingPastRates: true
            };
        case Actions.FETCH_PAST_EXCHANGE_RATES_SUCCESS:
            return {
                ...state,
                pastExchangeRates,
                isFetchingPastRates: false
            };
        case Actions.FETCH_PAST_EXCHANGE_RATES_ERROR:
            return {
                ...state,
                isFetchingPastRates: false
            };
        default:
            return state;
    }
}
export default ExchangeRatesReducer;
