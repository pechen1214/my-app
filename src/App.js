import React, { useEffect, useState } from 'react';
//import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './style/style.css';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { AllNews } from './news/allnews';
import { GetNews } from './news/getNews';
import { GetExchange } from './header/exchange/getExchange';
import { GetWeather } from './header/weather/getWeather';
import ModalMoveUp from './modalmoveUp';
//import { Admin } from './admin/admin';
// Вопрос форматирования поднимался многократно. Тут проблема с форматированием. Надо поправить по всему проекту, где встретишь подобные проблемы
function App() {
    const [news, setNews] = useState([]);
    // лучше назвать exchangeRates. exchange - глагол, а глаголы как правило для функций
    const [exchange, setExchange] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        GetNews.getAllNews('politics').then(
            (news) => setNews(news)
        );

        GetExchange.getAllExchange().then(
            (exchange) => setExchange(exchange)
        );

        GetWeather.getAllWeather().then(
            (weather) => setWeather(weather)
        );
    }, []);

    // В данном случае это всё должно производиться на беке. Вообще, в app компоненте должно быть минимум логики, вся логика должна выноситься в соответствующие структурные единицы, компоненты там и тп
  //  const [search, setSearch] = useState('')
  //  const searchNews = (search) => {
  //      setSearch(search)
  //  }

  //  const filterNews = news.filter(newsItem => {
  //      return newsItem.title.toLowerCase().includes(search.toLowerCase()
  //      )
  //  })

    const moveUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        // <BrowserRouter>
        <div className="all">
            <Header exchange={exchange} weather={weather} />
            <Nav />
            {console.log(news)}
            <AllNews news={news} />


            {/*      <Routes>
                    
                        Как правило такие фильтры реализовываются не при помощи роутинга, а при помощи параметра который отправляют на бек.
                        То есть,в эндпоинт "/data" ты добавляешь параметр "type", в нем ты отправляешь тип новостей которые нужны: спортивные, политика и тп.
                        И уже бек сам решает, что тебе вернуть. Если пришел type="sport" то возвращает спортивные новости.
                        На фронте у тебя будет 1 компонент в котором ты просто отрисовываешь полученные данные.
                        Иначе представь, что у тебя будут добавляться новые типы новостей, тебе придется каждый раз менять роутинг, не надо так
                    
                    <Route path="/" element={<AllNews news={filterNews} category={""} />} />
                    <Route path="/sport" element={<AllNews news={filterNews} category={"sport"} />} />
                    <Route path="/politics" element={<AllNews news={filterNews} category={"politics"} />} />
                    <Route path="/economy" element={<AllNews news={filterNews} category={"economy"} />} />
                    <Route path="/culture" element={<AllNews news={filterNews} category={"culture"} />} />
                    <Route path="/admin" element={<Admin news={news} />} />
                </Routes>*/}
            <Footer />
            <ModalMoveUp moveUp={moveUp} />
        </div>
        // </BrowserRouter>
    );
}

export default App;
