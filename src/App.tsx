import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceRoof from './pages/ServiceRoof';
import ServiceInsulation from './pages/ServiceInsulation';
import ServiceInterior from './pages/ServiceInterior';
import ServiceWaterproofing from './pages/ServiceWaterproofing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/roofs" element={<ServiceRoof />} />
          <Route path="services/insulation" element={<ServiceInsulation />} />
          <Route path="services/interior" element={<ServiceInterior />} />
          <Route path="services/waterproofing" element={<ServiceWaterproofing />} />
        </Route>
      </Routes>
    </Router>
  );
}
