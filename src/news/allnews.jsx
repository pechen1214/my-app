import { NewsItem } from "./newsItem";


export function AllNews(props) {
    return (

        <div class="news">
            <NewsItem news={props.news} />
        </div>
    );
}