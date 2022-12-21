import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetNews } from "./getNews";

export function SingleNews() {
  let { id } = useParams();
  const [singleNews, get] = useState([]);
  useEffect(() => {
    GetNews.getSingleNews(id).then((singleNews) => get(singleNews));
  }, []);
  return (
    <div className="news">
      <article className="news-item">
        <div className="news-item__href">
          <span className="news-item__date">{singleNews.date}</span>
          <h2 className="news-item__title">{singleNews.title}</h2>
          <span className="news-item__image">
            <img
              src={singleNews.image}
              className="news-item__item-image"
              alt="Фото: Unsplash"
            />
          </span>
          <p className="news-item__description">{singleNews.article}</p>
        </div>
      </article>
    </div>
  );
}
