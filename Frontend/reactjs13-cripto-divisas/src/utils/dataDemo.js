export const convertCurrency = (amount, baseCurrency, targetCurrency1, targetCurrency2) => {
    const exchangeRates = {
        USD: 1,
        ARS: 100,
        COP: 4000,
        PEN: 4,
        EUR: 0.85,
        BTC: 0.00002,
        ETH: 0.0005,
        BNB: 0.002
    };
    const amountInBaseCurrency = amount / exchangeRates[baseCurrency];
    const targetCurrency1Amount = amountInBaseCurrency * exchangeRates[targetCurrency1];
    const targetCurrency2Amount = amountInBaseCurrency * exchangeRates[targetCurrency2];
    return { [targetCurrency1]: targetCurrency1Amount, [targetCurrency2]: targetCurrency2Amount };
};

export const namesCryptos = [
    {
        "value": "BTC",
        "name": "Bitcoin"
    },
    {
        "value": "BNB",
        "name": "Binance Coin"
    },
    {
        "value": "ETH",
        "name": "Ethereum"
    }
];

export const namesCurrencies = [
    {
        value: "USD",
        name: "United States Dollar",
    },
    {
        value: "ARS",
        name: "Argentine Peso",
    },
    {
        value: "COP",
        name: "Colombian Peso",
    },
    {
        value: "PEN",
        name: "Peruvian Sol",
    },
    {
        value: "EUR",
        name: "Euro",
    }
];
