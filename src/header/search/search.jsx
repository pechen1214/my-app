
export const Search = ({ onChange }) => {


    const searchNews = (search) => {
        onChange(search.target.value)
    }


    return (
        <div className="header__search">
            <form
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
                <button
                    type="submit"
                    className="search-form__button"
                >
                    <i className="fa-solid fa-magnifying-glass">
                    </i>

                </button>
            </form>
        </div>
    );
}