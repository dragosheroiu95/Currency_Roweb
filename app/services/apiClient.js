import { API_URL } from '../helpers/config';

export const ApiClient = {
    fetchExchangeRates: (base) => {
        return fetch(API_URL + `latest?base=${base}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                return { error };
            });
    },

    fetchPastExchangeRates: (symbols, start_at, end_at) => {
        return fetch(API_URL + `history?start_at=${start_at}&end_at=${end_at}&symbols=${symbols}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                return { error };
            });
    }
}