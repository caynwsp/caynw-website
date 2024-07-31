import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navigation/Navbar.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { Routes,Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AdvancedBannerTop from './Components/Banners/AdvancedBanner.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <nav className='navbar'></nav>
      <ParallaxProvider>
      <AdvancedBannerTop /> 
      <Header />
        <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default App;
