import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuyingPage from './BuyingPage';
import RentalPage from './RentalPage';
import LandingPage from './LandingPage';
import NavigationBar from './NavigationBar';
import Customization from './Customization';
import Footer from './Footer';


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
