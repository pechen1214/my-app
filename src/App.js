import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import './style/style.css';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';

import { AllNews } from './news/allnews';
import { GetNews } from './news/getNews';
import { GetExchange } from './header/exchange/getExchange';
import { GetWeather } from './header/weather/getWeather';
import ModalMoveUp from './modalmoveUp';
import { Admin } from './admin/admin';
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
    const searchNews = (search) => {
        setSearch(search)
    }

    const filterNews = news.filter(news => {
        return news.title.toLowerCase().includes(search.toLowerCase()
        )
    })

    const moveUp=()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }


    return (
        <BrowserRouter>
            <div className="all">
                <Header exchange={exchange} onChange={searchNews} weather={weather} />
                <Nav/>
                <Routes>
                    <Route path="/" element={<AllNews news={filterNews} category={""} />} />
                    <Route path="/sport" element={<AllNews news={filterNews} category={"sport"} />} />
                    <Route path="/politics" element={<AllNews news={filterNews} category={"politics"} />} />
                    <Route path="/economy" element={<AllNews news={filterNews} category={"economy"} />} />
                    <Route path="/culture" element={<AllNews news={filterNews} category={"culture"} />} />
                    <Route path="/admin" element={<Admin news={news} category={""} />} />
                </Routes>
                <Footer />
                <ModalMoveUp moveUp={moveUp}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
