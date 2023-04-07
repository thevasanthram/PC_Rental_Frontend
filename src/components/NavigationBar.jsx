import React from "react";
import { useNavigate } from "react-router-dom";
import './../css/NavigationBar.css'
import './../css/RentalPage.css'

function NavigationBar() {
    const navigate = useNavigate();

    return (
        <div id="navigation_bar">
            <button className='navigation_buttons' onClick={() => navigate('/rent')}>Rent</button>
            <button className='navigation_buttons' onClick={() => navigate('/customize')}>Customize</button>
        </div>
    )
}

export default NavigationBar;