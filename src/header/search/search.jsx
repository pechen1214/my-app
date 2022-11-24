
export const Search = ({ onChange }) => {


    const searchNews = (search) => {
        onChange(search.target.value)
    }


    return (
        <div className="header__search">
            <div
                action=""
                method="get"
                className="search-form"
            >
                <input
                    name="s"
                    placeholder="Поиск на странице"
                    type="search"
                    className="search-form__input"
                    onChange={searchNews}
                />
            </div>
        </div>
    );
}