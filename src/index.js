import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const express = require('express');
const path = require('path');
const app = express();

app.get('/api/greeting', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
