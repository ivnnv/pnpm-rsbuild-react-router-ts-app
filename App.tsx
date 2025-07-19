import './App.css';

import { BrowserRouter as Router, Link,Route, Routes } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="content">
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
