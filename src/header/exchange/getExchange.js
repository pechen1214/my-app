export class GetExchange{
    static getAllExchange(){
        return fetch('https://www.cbr-xml-daily.ru/latest.js').then(
            (response) =>response.json()
          )
    }
}