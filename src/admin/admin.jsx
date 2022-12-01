import { useState } from "react"
import ModalNews from "./modalNews"

export function Admin({ news }) {

    const [enterNews, setEnterNews] = useState('')




    return (
        <div className="news">
            <div className="adminPanel">
                {enterNews && <ModalNews enterNews={enterNews} />}
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