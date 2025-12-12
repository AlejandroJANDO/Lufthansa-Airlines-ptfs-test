import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import CheckIn from './pages/CheckIn';
import Fleet from './pages/Fleet';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/fleet" element={<Fleet />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
