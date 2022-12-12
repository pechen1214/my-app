export function ExchangeRates({ exchangeRates }) {
    return (
        <div className="header__exchange">
            <div className="exchange">
                <table>
                    <tbody>
                        <tr>
                            <td>ЦБ USD</td>
                            <td>{exchangeRates.usd}</td>
                            <td>{exchangeRates.date}</td>
                        </tr>
                        <tr>
                            <td>ЦБ EUR</td>
                            <td>{exchangeRates.eur}</td>
                            <td>{exchangeRates.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
