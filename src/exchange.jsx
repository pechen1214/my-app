import React from "react";
import { useState } from "react";


function Eur() {
    const reqestURL = 'https://www.cbr-xml-daily.ru/latest.js'
    fetch(reqestURL)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data.rates.EUR)
    return
    })
    }

function Ex() {

const [count, setCount]=useState(1)


const Ad = ()=> {
    setCount(Eur)
console.log(count)}

return(
    
    <div>
        <h1> {count}</h1>
        <button onClick={Ad}> YFJ </button>
    </div>
)
}
export default Ex;