

import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

// Get Method............ 

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

// https get method from indivisual country name ...

export const getCountryIndData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies, laguages,borders,flags`);
}