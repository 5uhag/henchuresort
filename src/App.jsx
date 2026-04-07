import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Rooms from './pages/Rooms.jsx';
import Gallery from './pages/Gallery.jsx';
import Dining from './pages/Dining.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f6f1e8] text-slate-950 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}