const fetch = require('node-fetch');

// src/utils/currency.js
async function convert(base, destination) {
    try {
        const result = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${base}`
        );
        const data = await result.json();
        console.log(data);
        // return data.rates[destination];
    } catch (e) {
        return null;
    }
}

convert()