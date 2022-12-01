import { Link } from "react-router-dom";

export function Nav() {
    return (

        <div className="nav">
            <ul className="nav__menu">
                <li className="nav__item nav__item_active"><Link className="menu-button menu-button_active" to="/">Главная</Link></li>
                <li className="nav__item"><Link className="menu-button" to="/politics">Политика</Link></li>
                <li className="nav__item"><Link className="menu-button" to="/sport">Спорт</Link></li>
                <li className="nav__item"><Link className="menu-button" to="/economy">Экономика</Link></li>
                <li className="nav__item"><Link className="menu-button" to="/culture">Культура</Link></li>

            </ul>

        </div>


    );
}