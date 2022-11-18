import { NewsItem } from "./newsItem";


export function Economy(props) {
    return (

        <div class="news">
            <NewsItem news={props.news} category={props.category} />
        </div>
    );
}