import { NewsItem } from "./newsItem";


export function AllNews(props) {
    return (

        <div className="news">
            <NewsItem news={props.news} category={props.category}/>
        </div>
    );
}