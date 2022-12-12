export function Nav({ setCategory }) {
    const getCategory = (category) => {
        setCategory(category)
    }
    return (
        <div className="nav">
            <ul className="nav__menu">
                <li onClick={() => getCategory('')} className="nav__item nav__item_active"><a href="##" className="menu-button menu-button_active" >Главная</a></li>
                <li onClick={() => getCategory('politics')} className="nav__item"><a className="menu-button" href="##">Политика</a></li>
                <li onClick={() => getCategory('sport')} className="nav__item"><a className="menu-button" href="##">Спорт</a></li>
                <li onClick={() => getCategory('economy')} className="nav__item"><a className="menu-button" href="##">Экономика</a></li>
                <li onClick={() => getCategory('culture')} className="nav__item"><a className="menu-button" href="##">Культура</a></li>
            </ul>
        </div>
    );
}