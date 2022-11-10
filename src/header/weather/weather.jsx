export function Weather() {
    return (
        <div class="header__weather">
            <div class="weather-day">
                <div class="weather-day__icon">
                    <i class="fa-solid fa-cloud-sun-rain"></i>
                </div>
                <div>
                    <div> Срд,12</div>
                    <div> +25</div>
                </div>
            </div>
            <div class="weather-day">
                <div class="weather-day__icon">
                    <i class="fa-solid fa-cloud-showers-heavy"></i>
                </div>
                <div>
                    <div> Чтв,13</div>
                    <div> +10</div>
                </div>
            </div>
            <div class="weather-day">
                <div class="weather-day__icon">
                    <i class="fa-solid fa-cloud-bolt"></i>
                </div>
                <div>
                    <div> Птн,14</div>
                    <div> -1</div>
                </div>
            </div>
        </div>
    );
}