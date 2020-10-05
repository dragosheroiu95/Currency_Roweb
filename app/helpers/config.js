export const API_URL = 'https://api.exchangeratesapi.io/';
export const CURRENCY_FLAG = (currency) => currency === 'EUR' ?
    'https://lh3.googleusercontent.com/proxy/YPFsWE8Zyqkfg4h4jip1G18h15e-LHfRVjptgq-TqJ6V7hFgnj0AC14CBczzr-p5zKynzi-HRlPbttYiwQ7-ETWw8cdrufPSuMdQlbPNSMMAZ3RtG8jISvLX818BFjbA4rfdAdVqvB8Ohh8' :
    `https://www.ecb.europa.eu/shared/img/flags/${currency}.gif`;