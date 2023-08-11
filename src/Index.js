// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import the index.css file
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Register service worker for progressive web app features
serviceWorker.register();
