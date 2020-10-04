import { API_URL } from '../helpers/config';

export function fetchExchangeRates(base) {
    return fetch(API_URL + `latest?base=${base}`, {
        method: 'GET'
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            return { error };
        });
}