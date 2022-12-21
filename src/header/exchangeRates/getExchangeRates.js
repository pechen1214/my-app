export class GetExchangeRates {
  static getAllExchangeRates() {
    return fetch("https://www.cbr-xml-daily.ru/latest.js")
      .then((response) => response.json())
      .then((exchangeRates) => {
        return {
          date: exchangeRates.date.substr(5),
          usd: (1 / exchangeRates.rates.USD).toFixed(2),
          eur: (1 / exchangeRates.rates.EUR).toFixed(2),
        };
      });
  }
}
