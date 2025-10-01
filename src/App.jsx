import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Writing from './pages/Writing.jsx';
import WritingPost from './pages/WritingPost.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/:slug" element={<WritingPost />} />
    </Routes>
  );
}
