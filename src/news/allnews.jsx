import { NewsItem } from "./newsItem";

export function AllNews({news, category}) {
    const filteredNews = category
        ? news.filter((d) => d.category === category)
        : news;

    return (
        <div className="news">
            {
                filteredNews.map((newsItem) => (
                    <NewsItem key={newsItem.id} newsItem={newsItem}></NewsItem>
                ))
            }

            {filteredNews.length === 0 && (
                // это надо вынести будет в отдельный компонент NoData
                <article  className="news-item">
                    <a className="news-item__href" >
                        <h2 className="news-item__title">
                            По вашему запросу ничего не найдено.
                        </h2>
                    </a>
                </article>
            )}
        </div>
    );
}