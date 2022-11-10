import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
    <div class="all">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<AllNews/>}/>
        <Route path='/sport' element={<Sport/>}/>
        <Route path='/politics' element={<Politics/>}/>
        <Route path='/economy' element={<Economy/>}/>
        <Route path='/culture' element={<Culture/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
