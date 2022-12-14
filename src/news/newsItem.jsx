import { Link } from "react-router-dom";

export function NewsItem({ newsItem }) {
  return (
    <article key={newsItem.id} className="news-item">
      <div className="news-item__href">
        <span className="news-item__date">{newsItem.date}</span>
        <h2 className="news-item__title">{newsItem.title}</h2>
        <span className="news-item__image">
          <img
            src={newsItem.image}
            className="news-item__item-image"
            alt="Фото: Unsplash"
          />
        </span>
        <p className="news-item__description">
          {newsItem.article.substring(0, 250)}
          <Link to={newsItem.id}>...</Link>
        </p>
      </div>
    </article>
  );
}
