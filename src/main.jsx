import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import App from './App.jsx';
import './App.css';
import './index.css';
import 'katex/dist/katex.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>
);
