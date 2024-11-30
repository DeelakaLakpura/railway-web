import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import Features from './components/Features';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import OurService from './pages/OurServices';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  // Hook to get the current route
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* Define routes for pages */}
        <Route path="ourservice" element={<OurService />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HeroSlider />} />
        <Route path='login' element = {<Login />} />
      </Routes>
      {/* Show Features only on the home page */}
      {location.pathname === '/' && <Features />}
      <Footer />
    </div>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
