export const API_URL = 'https://api.exchangeratesapi.io/';
export const CURRENCY_FLAG = (currency) => currency === 'EUR' ?
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpHfNz0IgxpZZ4pxPOTfdlgZ9mrIcRVKO1kg&usqp=CAU' :
    `https://www.ecb.europa.eu/shared/img/flags/${currency}.gif`;