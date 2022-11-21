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

function App() {
    const [news, setNews] = useState([]);
    const [exchange, setExchange] = useState(null);

    useEffect(() => {
        GetNews.getAllNews().then(
            (news) => setNews(news)
        );

        GetExchange.getAllExchange().then(
            (exchange) => setExchange(exchange)
        );
    }, []);

    return (
        <BrowserRouter>
            <div className="all">
                <Header exchange={exchange}/>
                <Nav/>
                <Routes>
                    <Route path="/" element={<AllNews news={news} category={""}/>}/>
                    <Route path="/sport" element={<Sport news={news} category={"sport"}/>}/>
                    <Route path="/politics" element={<Politics news={news} category={"politics"}/>}/>
                    <Route path="/economy" element={<Economy news={news} category={"economy"}/>}/>
                    <Route path="/culture" element={<Culture news={news} category={"culture"}/>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
