import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage'
import { ArtistPage } from './pages/ArtistPage';
// import { MinnaNinja } from './components/MinnaNinja';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
        <Footer />
        {/* <MinnaNinja /> */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Router>
  )
}

export default App
