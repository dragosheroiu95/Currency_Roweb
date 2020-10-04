import * as Actions from '../actions/actionTypes';

const initialState = {
    exchangeRates: [],
    isFetching: false,
    fetchedDate: null,
    currencies: ['RON', 'USD', 'EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR'],
    availableIntervals: [3000, 5000, 15000],
    base: 'EUR',
    timer: 3000
};

const ExchangeRatesReducer = (state = initialState, action) => {

    const { exchangeRates, fetchedDate, timer, base } = action;

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
        default:
            return state;
    }
}
export default ExchangeRatesReducer;
