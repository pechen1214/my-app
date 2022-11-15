import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

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



function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    console.log('Petux')
    GetNews.getAllNews().then(

      (news) => setNews(news)

    )
  }, []);

  return (
    <BrowserRouter>
      <div class="all">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<AllNews news={news} />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/politics' element={<Politics />} />
          <Route path='/economy' element={<Economy />} />
          <Route path='/culture' element={<Culture />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
