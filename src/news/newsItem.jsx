
export function NewsItem({ news, category }) {

    return (
        news.map((d) =>((d.category === category ? (
            <article key={d.id} className="news-item">
                <a className="news-item__href">
                    <span className="news-item__date">
                        {d.date}
                    </span>

                    <h2 className="news-item__title">
                        {d.title}
                    </h2>
                    <span className="news-item__image">
                        <img src={d.image} className="news-item__item-image"
                            alt="Фото: Unsplash" />
                    </span>
                    <p className="news-item__description">
                        {d.article}
                    </p>
                </a>
            </article>
        ) : (<div key={d.id}></div>))
        ))
        
    )
}