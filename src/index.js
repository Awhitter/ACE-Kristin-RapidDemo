import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './tailwind.css';
import './index.css';
import ACEInhibitorsGuide from './ACEInhibitorsGuide';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ACEInhibitorsGuide />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
