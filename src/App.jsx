import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Rigs from './pages/Rigs';
import RigsDetail from './pages/RigsDetail';
import './App.css'

// mock server response:
import './server';

function App() {

  return (
    <BrowserRouter>
      {/*todo: separate into separate components*/}
      <header>
        <Link className="site-logo" to="/">#Overlandlife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/rigs">Rigs</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/rigs" element={<Rigs /> } />
        <Route path="/rigs:id" element={<RigsDetail /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
