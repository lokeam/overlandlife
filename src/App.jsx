import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

import About from './pages/About';
import Rigs from './pages/Rigs/Rigs';
import RigsDetail from './pages/Rigs/RigsDetail';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostRigs from './pages/Host/HostRigs';
import HostRigDetail from './pages/Host/HostRigDetail';

// mock server response:
import './server';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="rigs" element={<Rigs /> } />
          <Route path="rigs/:id" element={<RigsDetail /> } />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="rigs" element={<HostRigs />} />
            <Route path="rigs/:id" element={<HostRigDetail />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
