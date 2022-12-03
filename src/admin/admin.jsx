import { useState } from "react"
import ModalNews from "./modalNews"

export function Admin({ news }) {

    // enterNews плохое название для переменной. Оно больше подходит для функции (enterNews - ввести новость).
    // Очень советую почитать "чистый код" там подробно описано то правильно называть переменные
    const [enterNews, setEnterNews] = useState('')




    return (
        <div className="news">
            <div className="adminPanel">
                {enterNews && <ModalNews enterNews={enterNews} />}
                {/*Название классов должны быть в нотации kebab-case а не в camelCase*/}
                <h2 className="adminPanel__title">Панель Администратора</h2>
                <button className="adminPanel__addNews" onClick={() => setEnterNews(news)}>
                    Добавить новость
                </button>
                <div>Список новостей: </div>
                {news.map((news) => (
                    <div key={news.id} className="adminPanel__listNews">
                        <button
                            onClick={() => setEnterNews(news)}
                            type="button"
                            className="adminPanel__itemNews list-group-item list-group-item-action active"
                            aria-current="true"
                        >
                            {news.title}
                        </button>
                    </div>
                )
                )}</div>
        </div>
    )
}
