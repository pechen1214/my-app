export function Search() {
    return (
        <div class="header__search">
            <form action="" method="get" class="search-form">
                <input name="s" placeholder="Поиск по сайту" type="search" class="search-form__input" />
                <button type="submit" class="search-form__button"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}