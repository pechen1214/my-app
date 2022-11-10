import { Exchange } from './exchange/exchange';
import Logo from './logo.png';
import { Search } from './search/search';
import { Weather } from './weather/weather';

export function Header() {
    return (
        <div class="header">
            <div class="header__logo">
                <a href="/">
                    <img class="logo" src={Logo} alt="Логотип" />
                </a>
            </div>
            <Weather />
            <Exchange/>
            <Search/>
        </div>
    );
}