export function Exchange({ exchange }) {
    return (
        <div className="header__exchange">
            <div className="exchange">
                <table>
                    <tbody>
                        <tr>
                            <td>ЦБ USD</td>
                            <td>{exchange.usd}</td>
                            <td>{exchange.date}</td>
                        </tr>
                        <tr>
                            <td>ЦБ EUR</td>
                            <td>{exchange.eur}</td>
                            <td>{exchange.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}