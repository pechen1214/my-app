import { useState } from "react";
import { GetNews } from '../news/getNews';

// логику модалки стоит вынести в отдельный компонент, который не будет привязан к определенной странице/сущности(как у тебя с news). Сама логика модалки одинакова, отличается только её контент
// Вот тут есть пара хороших примеров  https://www.youtube.com/watch?v=eS0GL73tkmw
const ModalNews = ({ enterNews }) => {
    // Неправильно, погугли как работать с формами в реакте
    const oldID = enterNews.id
    const [id, setIdd] = useState(enterNews.id)
    const setId = (id) => {
        setIdd(id.target.value)
    }
    const [date, setDated] = useState(enterNews.date)
    const setDate = (date) => {
        setDated(date.target.value)
    }
    const [title, setTitled] = useState(enterNews.title)
    const setTitle = (title) => {
        setTitled(title.target.value)
    }
    const [article, Articled] = useState(enterNews.article)
    const setArticle = (article) => {
        Articled(article.target.value)
    }
    const [image, setImaged] = useState(enterNews.image)
    const setImage = (image) => {
        setImaged(image.target.value)
    }
    const [category, setCategoryd] = useState(enterNews.category)
    const setCategory = (category) => {
        setCategoryd(category.target.value)
    }
    const newNews = { id: id, date: date, title: title, article: article, image: image, category: category }
    const newsID = id
    return (
        <div className="modalNews">
            {/*Поля стоит подписывать, иначе непонятно за что отвечают каждый инпут*/}
            <div>
                <input name="id" className="modalNews__item" type="text" value={id} onChange={setId} placeholder='Уникальный id' />
            </div>
            <div>
                <input name="date" className="modalNews__item" type="text" value={date} onChange={setDate} placeholder='Дата' />
            </div>
            <div>
                <input name="title" className="modalNews__item" type="text" value={title} onChange={setTitle} placeholder='Заголовок' />
            </div>
            <div>
                <textarea name="article" className="modalNews__itemArticle" value={article} onChange={setArticle} placeholder='Текст статьи' />
            </div>
            <div>
                <input name="image" className="modalNews__item" type="text" value={image} onChange={setImage} placeholder='Ссылка на изображение' />
            </div>
            <div>
                <input name="category" className="modalNews__item" type="text" value={category} onChange={setCategory} placeholder='Категория(politics, culture, sport, economy)' />
            </div>

            <div>
                <button onClick={() => GetNews.editNews(newNews, oldID)}>
                    Сохранить изменения
                </button>
                <button onClick={() => GetNews.deleteNews(newsID)}>
                    Удалить новость
                </button>
                <button onClick={() => GetNews.exit()}>
                    Выход
                </button>
            </div>

        </div>
    )
}
export default ModalNews
