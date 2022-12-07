import { NewsItem } from "./newsItem";
import { NoData } from "./noData";

export function AllNews({ news }) {
    return (
        <div className="news">
            {
                news.map ((newsItem) => (
                    newsItem && <NewsItem key={newsItem.id} newsItem={newsItem}/>
                ))
            }
            {news.length === 0 && (<NoData />)}
        </div>
    );
} 