import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RentalPage from './components/RentalPage';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import Customization from './components/Customization';
import Footer from './components/Footer';
import Call_Icon from './images/call_icon.png'
import DisplayCallComponent from './components/DisplayCallComponent'

function App() {

  const [showCallComponent, changeshowCallComponent] = useState(false)

  function displayContactNumber() {
    changeshowCallComponent(true);
  }

  function handleOkClick() {
    changeshowCallComponent(false);
  }

  return (
    <div id='main'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/'  element={<LandingPage />} />
          <Route path='/rent' element={<RentalPage />} />
          <Route path='/customize' element={<Customization />} />
        </Routes>
        <Footer />
        <div id='call_icon_container'>
          <img src={Call_Icon} id='call_icon' onClick={displayContactNumber} alt="Contact Us" />
        </div>

        {showCallComponent && (
          <DisplayCallComponent handleOkClick={handleOkClick} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
