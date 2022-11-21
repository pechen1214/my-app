export class GetExchange {
    static getAllExchange() {
        return fetch('https://www.cbr-xml-daily.ru/latest.js').then(
            (response) => response.json()
        ).then((exchange) => {
            return {
                date: exchange.date,
                usd: exchange.rates.USD,
                eur: exchange.rates.EUR,
            };
        });
    }
}