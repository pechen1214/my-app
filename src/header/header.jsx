import { Exchange } from './exchange/exchange';
import Logo from './logo.png';
import {Search} from './search/search';
import { Weather } from './weather/weather';

export function Header(props) {

    return (
        <div className="header">
            <div className="header__logo">
                <a href="/">
                    <img className="logo" src={Logo} alt="Логотип" />
                </a>
            </div>
            {props.weather && <Weather weather={props.weather} />}
            {props.exchange && <Exchange exchange={props.exchange} />}
            <Search onChange={props.onChange} />
        </div>
    );
}