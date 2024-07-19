import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './tailwind.css';
import './index.css';
import ACEInhibitorsGuide from './ACEInhibitorsGuide';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ACEInhibitorsGuide />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
