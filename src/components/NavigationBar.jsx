import React from "react";
import { useNavigate } from "react-router-dom";
import './../css/NavigationBar.css'
import './../css/RentalPage.css'

function NavigationBar() {
    const navigate = useNavigate();

    function routeNavigationBar(event, pathname) {
        const buttons = document.getElementsByClassName('navigation_buttons')

        Object.values(buttons).map((button) => {
            button.style.textDecoration = 'none'
        })

        event.target.style.textDecoration = 'underline'

        navigate(pathname)
    }
    return (
        <div id="navigation_bar">
            <button className='navigation_buttons' onClick={(event) => routeNavigationBar(event, '/rent')}>Rent</button>
            <button className='navigation_buttons' onClick={(event) => routeNavigationBar(event, '/customize')}>Customize</button>
        </div>
    )
}

export default NavigationBar;