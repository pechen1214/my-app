import React, { useEffect, useState } from 'react';
import './style/style.css';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { AllNews } from './news/allnews';
import { GetNews } from './news/getNews';
import { GetExchangeRates } from './header/exchangeRates/getExchangeRates';
import { GetWeather } from './header/weather/getWeather';
import ModalMoveUp from './modalmoveUp';
//import { Admin } from './admin/admin';

function App() {
    const [news, setNews] = useState([]);
    const [exchangeRates, setExchangeRates] = useState(null);
    const [weather, setWeather] = useState(null);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        GetNews.getAllNews().then(
            (news) => setNews(news)
        );

        GetExchangeRates.getAllExchangeRates().then(
            (exchangeRates) => setExchangeRates(exchangeRates)
        );

        GetWeather.getAllWeather().then(
            (weather) => setWeather(weather)
        );
    }, []);

    const filterNews = news.filter(newsItem => {
        return newsItem.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="all">
            <Header exchangeRates={exchangeRates} onChange={setSearch} news={news} weather={weather} />
            <Nav setCategory={setCategory} />
            <AllNews news={filterNews} category={category} />
            <Footer />
            <ModalMoveUp />
        </div>
    );
}
export default App;