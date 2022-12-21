import React, { useEffect, useState } from "react";
import "./style/style.css";
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { AllNews } from "./news/allnews";
import { GetNews } from "./news/getNews";
import { GetExchangeRates } from "./header/exchangeRates/getExchangeRates";
import { GetWeather } from "./header/weather/getWeather";
import ModalMoveUp from "./modalMoveUp/modalmoveUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./admin/admin";
import { SingleNews } from "./news/singleNews";

function App() {
  const [news, setNews] = useState([]);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  let [indent, indentFunction] = useState(0);

  useEffect(() => {
    GetNews.getAllNews().then((news) => setNews(news));
    GetExchangeRates.getAllExchangeRates().then((exchangeRates) =>
      setExchangeRates(exchangeRates)
    );
    GetWeather.getAllWeather().then((weather) => setWeather(weather));
  }, []);
  const filterNews = news.filter((newsItem) => {
    return newsItem.title.toLowerCase().includes(search.toLowerCase());
  });
  window.onscroll = () =>
    indentFunction(
      (indent = window.pageYOffset
        ? window.pageYOffset
        : document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop)
    );
  return (
    <BrowserRouter>
      <div className="all">
        <Header
          exchangeRates={exchangeRates}
          onChange={setSearch}
          news={news}
          weather={weather}
        />
        <Nav setCategory={setCategory} />
        <Routes>
          <Route
            path="/"
            element={<AllNews news={filterNews} category={category} />}
          />
          <Route path="/admin" element={<Admin news={news} />} />
          <Route path="/:id" element={<SingleNews />} />
        </Routes>
        <Footer />
        {indent >= 300 && <ModalMoveUp />}
      </div>
    </BrowserRouter>
  );
}
export default App;
