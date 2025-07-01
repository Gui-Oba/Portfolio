import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cave from './pages/Cave.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cave" element={<Cave />} />
    </Routes>
  );
}
