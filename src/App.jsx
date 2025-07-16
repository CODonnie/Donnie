import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import NotFound from './components/NotFound';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="Project" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
