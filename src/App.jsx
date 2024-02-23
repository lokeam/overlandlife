import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import About from './pages/About';
import Rigs, { loader as rigsLoader } from './pages/Rigs/Rigs';
import RigsDetail, {loader as rigsDetailLoader} from './pages/Rigs/RigsDetail';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostRigs, {loader as hostRigsLoader}from './pages/Host/HostRigs';
import HostRigDetail, {loader as hostRigDetailLoader} from './pages/Host/HostRigDetail';
import HostRigInfo from './pages/Host/HostRigInfo';
import HostRigPricing from './pages/Host/HostRigPricing';
import HostRigPhotos from './pages/Host/HostRigPhotos';

import NotFound from './pages/NotFound';
import Error from './components/Error';

// mock server response:
import './server';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />} />
    <Route
      path="rigs"
      element={<Rigs /> }
      loader={rigsLoader}
      errorElement={<Error />}
    />
    <Route
      path="rigs/:id"
      element={<RigsDetail />}
      loader={rigsDetailLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />

      <Route
        path="rigs"
        element={<HostRigs />}
        loader={hostRigsLoader}
      />
      <Route
        path="rigs/:id"
        element={<HostRigDetail />}
        loader={hostRigDetailLoader}
      >
        <Route index element={<HostRigInfo />}/>
        <Route path="pricing" element={<HostRigPricing />}/>
        <Route path="photos" element={<HostRigPhotos />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
