import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuyingPage from './components/BuyingPage';
import RentalPage from './components/RentalPage';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import Customization from './components/Customization';
import Footer from './components/Footer';


function App() {
  return (
    <div id='main'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/'  element={<LandingPage />} />
          <Route path='/rent' element={<RentalPage />} />
          <Route path='/customize' element={<Customization />} />
          <Route path='/buy' element={<BuyingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
