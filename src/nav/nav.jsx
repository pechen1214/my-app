import { Link } from "react-router-dom";

export function Nav() {
    return (

        <div class="nav">
            <ul class="nav__menu">
                <li class="nav__item nav__item_active"><Link class="menu-button menu-button_active" to="/">Главная</Link></li>
                <li class="nav__item" acti><Link class="menu-button" to="/politics">Политика</Link></li>
                <li class="nav__item"><Link class="menu-button" to="/sport">Спорт</Link></li>
                <li class="nav__item"><Link class="menu-button" to="/economy">Экономика</Link></li>
                <li class="nav__item"><Link class="menu-button" to="/culture">Культура</Link></li>
                
            </ul>
            
        </div>
        
  
    );
}