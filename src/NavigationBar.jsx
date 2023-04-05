import React from "react";
import { useNavigate } from "react-router-dom";
import './NavigationBar.css'

function NavigationBar(){
    const navigate = useNavigate();
    return (
        <div id="navigation_bar">
            <button className='navigation_buttons' onClick={ () => navigate('/rent')}>Rent</button>
            <button className='navigation_buttons' onClick={ () => navigate('/customize')}>Customize</button>
            <button className='navigation_buttons' onClick={ () => navigate('/buy')}>Buy</button>
        </div>
    )
}

export default NavigationBar;