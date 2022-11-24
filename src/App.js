import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import './style/style.css';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';

import { Sport } from './news/sport';
import { Economy } from './news/economy';
import { AllNews } from './news/allnews';
import { Culture } from './news/culture';
import { Politics } from './news/politics';
import { GetNews } from './news/getNews';
import { GetExchange } from './header/exchange/getExchange';
import { GetWeather } from './header/weather/getWeather';
function App() {
    const [news, setNews] = useState([]);
    const [exchange, setExchange] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        GetNews.getAllNews().then(
            (news) => setNews(news)
        );

        GetExchange.getAllExchange().then(
            (exchange) => setExchange(exchange)
        );

        GetWeather.getAllWeather().then(
            (weather) => setWeather(weather)
        );

    }, []);

    const [search, setSearch] = useState('')
    const searchf = (search) => {
        setSearch(search)
    }

    const filterNews = news.filter(news => {
        return news.title.toLowerCase().includes(search.toLowerCase()
        )
    })

    return (
        <BrowserRouter>
            <div className="all">
                <Header exchange={exchange} onChange={searchf} weather={weather} />
                <Nav />
                <Routes>
                    <Route path="/" element={<AllNews news={filterNews} category={""} />} />
                    <Route path="/sport" element={<Sport news={filterNews} category={"sport"} />} />
                    <Route path="/politics" element={<Politics news={filterNews} category={"politics"} />} />
                    <Route path="/economy" element={<Economy news={filterNews} category={"economy"} />} />
                    <Route path="/culture" element={<Culture news={filterNews} category={"culture"} />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
