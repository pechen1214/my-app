import { NewsItem } from "./newsItem";


export function Culture(props) {
    return (
 
        <div className="news">
            <NewsItem news={props.news} category={props.category} />
        </div>
    );
}