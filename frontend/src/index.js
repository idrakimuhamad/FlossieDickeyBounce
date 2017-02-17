import React from 'react';
import ReactDOM from 'react-dom';
import router from './router.js';
import './index.css';

ReactDOM.render(
  <div className="app-wrapper">{router}</div>,
  document.getElementById('root')
);
