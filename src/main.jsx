import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.jsx';
import './App.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <SpeedInsights />
  </BrowserRouter>
);
