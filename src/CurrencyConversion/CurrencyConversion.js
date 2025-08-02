'use strict';

const convertMyDollars = (usd, currency) => {
    let rate = CONVERSION_RATES[currency];
    if (!['a', 'e', 'i', 'o', 'u'].includes(currency[0].toLowerCase())) rate = parseInt(rate, 2);
    const amount = usd * rate;
    return `You now have ${amount} of ${currency}.`;
}