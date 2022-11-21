export function Weather() {
    return (
        <div className="header__weather">
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-sun-rain"></i>
                </div>
                <div>
                    <div> Срд,12</div>
                    <div> +25</div>
                </div>
            </div>
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-showers-heavy"></i>
                </div>
                <div>
                    <div> Чтв,13</div>
                    <div> +10</div>
                </div>
            </div>
            <div className="weather-day">
                <div className="weather-day__icon">
                    <i className="fa-solid fa-cloud-bolt"></i>
                </div>
                <div>
                    <div> Птн,14</div>
                    <div> -1</div>
                </div>
            </div>
        </div>
    );
}