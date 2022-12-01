import { NewsItem } from "./newsItem";
import { NoData } from "./noData";

export function AllNews({ news, category }) {
    const filteredNews = category
        ? news.filter((newsUnit) => newsUnit.category === category)
        : news;
    return (
        <div className="news">
            {
                filteredNews.map((newsItem) => (
                    <NewsItem key={newsItem.id} newsItem={newsItem}></NewsItem>
                ))
            }

            {filteredNews.length === 0 && (<NoData />)}
        </div>
    );
}