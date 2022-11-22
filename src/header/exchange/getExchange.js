export class GetExchange {
    static getAllExchange() {
        return fetch('https://www.cbr-xml-daily.ru/latest.js').then(
            (response) => response.json()
        ).then((exchange) => {
            return {
                date: (exchange.date).substr(5),
                usd: (1/exchange.rates.USD).toFixed(2),
                eur: (1/exchange.rates.EUR).toFixed(2),
            };
        });
    }
}