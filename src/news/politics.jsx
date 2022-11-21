import { NewsItem } from "./newsItem";


export function Politics(props) {
    return (

        <div className="news">
            <NewsItem news={props.news} category={props.category} />
        </div>
    );
}