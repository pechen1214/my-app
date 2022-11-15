
export function NewsItem(news) {
    return (
        news.news.map((d) => (

            <article class="news-item">
                <a href="index.html" class="news-item__href">
                    <span class="news-item__date">
                        {d.date}
                    </span>

                    <h2 class="news-item__title">
                        {d.title}
                    </h2>
                    <span class="news-item__image">
                        <img src={d.image} class="news-item__item-image"
                            alt="Фото: Unsplash" />
                    </span>
                    <p class="news-item__description">
                        {d.article}
                    </p>
                </a>
            </article>

        )
        )
    )
}