import './App.css';
import Exchange from './exchange'
import Menu from './menu';
import Search from './search';

function App() {
  return (
    <div className="App">
     <Exchange/>
      <div className="all">
        <div className="header">
          <div className="header__logo">
            Логотип
          </div>
          <div className="header__weather">
            Погода
          </div>
          <div className="header__exchange">
            Курс валют
            
          </div>
        </div>
        <div className="nav">
          <div className="nav__categories">
            <Menu/>
          </div>
          <div className="nav__search">
            <Search/>
          </div>
        </div>
        <div className="news">
          Новости
        </div>
        <div className="futor">
          Футор
        </div>
      </div>
    </div>
  );
}

export default App;
