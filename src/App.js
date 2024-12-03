import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import Features from './components/Features';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import OurService from './pages/OurServices';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/ContactUs';
import BlogPage from './pages/BlogPage';
import AboutUs from './pages/AboutUs';
import Tickets from './pages/Tickets';
import PaymentPage from './pages/Payment';

function App() {
  // Hook to get the current route
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="ourservice" element={<OurService />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HeroSlider />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path='login' element = {<Login />} />
        <Route path='contact' element = {<Contact />} />
        <Route path='about' element = {<AboutUs />} />
        <Route path='tickets' element = {<Tickets />} />
        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
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
