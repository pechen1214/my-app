const reqestURL = 'https://www.cbr-xml-daily.ru/latest.js'

const Exchange=() =>{
    

fetch(reqestURL)
    .then(response => {
        return response.json()
    })
    .then(data => {console.log(data.rates)
        let eur=data.rates.EUR
        let usd=data.rates.USD
console.log('один доллар =',1/usd,' рублей')
console.log('один евро =',1/eur,' рублей')   
})}
export default Exchange;