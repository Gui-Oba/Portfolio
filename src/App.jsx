import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import Projects from './pages/Projects.jsx';
import Writing from './pages/Writing.jsx';
import WritingPost from './pages/WritingPost.jsx';
import ProjectPost from './pages/ProjectPost.jsx';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {Analytics} from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPost />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingPost />} />
    </Routes>
    <SpeedInsights />
    <Analytics />
    </div>
  );
}
