export const API_URL = 'https://api.exchangeratesapi.io/';
export const CURRENCY_FLAG = (currency) => currency === 'EUR' ?
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png' :
    `https://www.ecb.europa.eu/shared/img/flags/${currency}.gif`;

export const COLORS = {
    CAMBRIDGE_BLUE: '#9DC4B5',
    CELADON: '#BAD9A2',
    LAUREL_GREEN: '#ADBF97',
    MORNING_BLUE: '#93A392',
    LIME: '#E2EB98',
    TEXT: '#272D2D'
}