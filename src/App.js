import './App.css';
import Gallery from './components/Gallery';
import Home from './components/Home';
import About from './components/About';
import More from './components/MoreWork';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const showBanner = location.pathname === '/about' || location.pathname === '/gallery' || location.pathname === '/more';

  return (
    <div className="App">
      {showBanner && (
        <div className="banner">
          <img src="/topbar.jpg" alt="Decorative watercolor banner" />
        </div>
      )}
      <header className="header">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="main-title">Rabak Atelier</h1>
        </Link>
        <div className="subtitle-nav-container">
          <h2 className="subtitle">By Chan Chin Wei</h2>
          <nav className="nav-menu">
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/more">More...</Link> */}
          </nav>
        </div>
      </header>
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;