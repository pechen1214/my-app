export function Nav() {
    return (
        <div className="nav">
            <ul className="nav__menu">
                <li className="nav__item nav__item_active"><a className="menu-button menu-button_active">Главная</a></li>
                <li className="nav__item">< a className="menu-button" >Политика</a></li>
                <li className="nav__item"><a className="menu-button" >Спорт</a></li>
                <li className="nav__item"><a className="menu-button" >Экономика</a></li>
                <li className="nav__item"><a className="menu-button" >Культура</a></li>
            </ul>
        </div>
    );
}