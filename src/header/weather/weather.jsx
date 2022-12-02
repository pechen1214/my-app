export function Weather({ weather }) {
    let now = (((new Date(weather.date)).toString()).substring(0,3))+(((new Date(weather.date)).toString()).substring(7,10))
    // Плохие названия переменных, что означает n в конце?
    let nown = (((new Date(weather.daten)).toString()).substring(0,3))+(((new Date(weather.daten)).toString()).substring(7,10))
    let nownn = (((new Date(weather.datenn)).toString()).substring(0,3))+(((new Date(weather.datenn)).toString()).substring(7,10))

    return (
        <div className="header__weather">
            {/* 10-18, 19-26 строки и тд копипаста, хороший кандидат на вынос в свой собственный компонент*/}
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-sun-rain"></i>
                </div>
                <div>
                    <div> {now}</div>
                    <div> {weather.temperature} </div>
                </div>
            </div>
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-showers-heavy"></i>
                </div>
                <div>
                    <div> {nown}</div>
                    <div> {weather.temperaturen}</div>
                </div>
            </div>
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-bolt"></i>
                </div>
                <div>
                    <div> {nownn}</div>
                    <div> {weather.temperaturenn}</div>
                </div>
            </div>
        </div>
    );
}
