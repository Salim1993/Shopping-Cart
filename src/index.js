import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);