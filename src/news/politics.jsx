import { NewsItem } from "./newsItem";


export function Politics(props) {
    return (

        <div class="news">
            <NewsItem news={props.news} category={props.category} />
        </div>
    );
}