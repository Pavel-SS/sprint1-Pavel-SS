import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BookPage } from 'pages/book';
import { Footer } from 'widgets/ui/footer/footer';

import { MainPage } from './pages/main';
import { NavBar } from './widgets/ui/nav-bar';

import './styles/index.scss';

import '@fontsource/montserrat';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavBar />
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/book' element={<BookPage/>} />
      </Routes>
    </HashRouter>
    <Footer/>
  </React.StrictMode>
);
