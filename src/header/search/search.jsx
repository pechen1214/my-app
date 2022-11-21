export function Search() {
    return (
        <div className="header__search">
            <form action="" method="get" className="search-form">
                <input name="s" placeholder="Поиск по сайту" type="search" className="search-form__input" />
                <button type="submit" className="search-form__button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}