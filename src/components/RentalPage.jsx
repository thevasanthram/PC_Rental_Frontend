import React from 'react';
import './../css/RentalPage.css'
import TwoLaptops from './../images/lenovo-laptop-collection.png'
import LaptopIcon from './../images/laptop_icon.png'

import SSD_Icon from './../images/ssd_icon.png'
import ProcessorIcon from './../images/processor_icon.png'
import RAMIcon from './../images/ram_icon.png'

import laptopData from '../laptopData';


function RentalPage() {

    function dynamicFilteringCondition(filtering_item) {
        const rental_pc_side_filtering_container = document.getElementById('rental_pc_side_filtering_container')

        while (rental_pc_side_filtering_container.firstChild) {
            rental_pc_side_filtering_container.removeChild(rental_pc_side_filtering_container.lastChild)
        }

        const filteringData = {
            'Brand': ['Lenovo', 'Dell', 'HP', 'Apple'],
            'Core': ['Core i3', 'Core i5', 'Core i7','M1 Chip','M2 Chip'],
            'RAM': ['8GB RAM', '16GB RAM'],
            'Storage': ['256GB SSD', '512GB SSD', '1TB SSD']
        }

        filteringData[filtering_item].map((single_condition) => {
            const single_condition_element = document.createElement('button')
            single_condition_element.className = `rental_pc_side_filtering_button ${filtering_item}_side_filtering_button`
            single_condition_element.innerHTML = single_condition
            single_condition_element.addEventListener('click', (event) => filtering(event, filtering_item, single_condition))
            rental_pc_side_filtering_container.appendChild(single_condition_element)
        })
    }

    function filtering(event, category, filtering_value) {
        const rental_pc_container = document.getElementById('rental_pc_container')

        while (rental_pc_container.firstChild) {
            rental_pc_container.removeChild(rental_pc_container.lastChild)
        }

        const buttons = document.getElementsByClassName(`${category}_side_filtering_button`)

        Object.values(buttons).map((button) => {
            button.style.textDecoration = 'none';
        })

        event.target.style.textDecoration = 'underline'

        laptopData.map((laptop) => {
            if (laptop[category] == filtering_value) {
                const rental_pc_card = document.createElement('div')
                rental_pc_card.className = 'rental_pc_card'
                rental_pc_container.appendChild(rental_pc_card)

                const rental_pc_image_container = document.createElement('div')
                rental_pc_image_container.className = 'rental_pc_image_container'
                rental_pc_card.appendChild(rental_pc_image_container)

                const pc_rental_image = document.createElement('img')
                pc_rental_image.src = TwoLaptops
                pc_rental_image.className = 'pc_rental_image'
                rental_pc_image_container.appendChild(pc_rental_image)

                const rental_pc_name = document.createElement('div')
                rental_pc_name.className = 'rental_pc_name'
                rental_pc_name.innerHTML = laptop['Brand']
                rental_pc_card.appendChild(rental_pc_name)

                const rental_pc_spec = document.createElement('div')
                rental_pc_spec.className = 'rental_pc_spec'
                rental_pc_card.appendChild(rental_pc_spec)

                if(laptop['Core'] != null){
                    const Core = document.createElement('li')
                    Core.innerHTML = laptop['Core']
                    rental_pc_spec.appendChild(Core)
                }

                if(laptop['RAM'] != null){
                    const RAM = document.createElement('li')
                    RAM.innerHTML = laptop['RAM']
                    rental_pc_spec.appendChild(RAM)
                }

                if(laptop['Storage'] != null){
                    const Storage = document.createElement('li')
                    Storage.innerHTML = laptop['Storage']
                    rental_pc_spec.appendChild(Storage)
                }

                if(laptop['Inches'] != null){
                    const Inches = document.createElement('li')
                    Inches.innerHTML = laptop['Inches']
                    rental_pc_spec.appendChild(Inches)
                }

                // const rental_pc_price = document.createElement('div')
                // rental_pc_price.className = 'rental_pc_price'
                // rental_pc_price.innerHTML = `Rs. ${laptop['Price']} / month`
                // rental_pc_card.appendChild(rental_pc_price)
            }
        })
    }

    return (
        <div id='rental_pc_component'>
            <div id='filtering_condition_container'>
                <img src={LaptopIcon} onClick={() => dynamicFilteringCondition('Brand')} alt="" id='laptop_icon' className='filtering_condition_image' />
                <img src={ProcessorIcon} onClick={() => dynamicFilteringCondition('Core')} alt="" id='processor_icon' className='filtering_condition_image' />
                <img src={RAMIcon} alt="" onClick={() => dynamicFilteringCondition('RAM')} id='ram_icon' className='filtering_condition_image' />
                <img src={SSD_Icon} alt="" onClick={() => dynamicFilteringCondition('Storage')} id='ssd_icon' className='filtering_condition_image' />
            </div>

            <div id='rental_pc_main_content'>
                <div id='rental_pc_side_filtering_container'>
                    <button className='rental_pc_side_filtering_button Brand_side_filtering_button' onClick={(event) => filtering(event, 'Brand', 'Lenovo')}>Lenovo</button>
                    <button className='rental_pc_side_filtering_button Brand_side_filtering_button' onClick={(event) => filtering(event, 'Brand', 'Dell')}>Dell</button>
                    <button className='rental_pc_side_filtering_button Brand_side_filtering_button' onClick={(event) => filtering(event, 'Brand', 'HP')}>HP</button>
                    <button className='rental_pc_side_filtering_button Brand_side_filtering_button' onClick={(event) => filtering(event, 'Brand', 'Apple')}>Apple</button>
                </div>
                <div id='rental_pc_container'>
                    {
                        laptopData.map((data) => (
                            <div className='rental_pc_card'>
                                <div className='rental_pc_image_container'>
                                    <img src={TwoLaptops} alt="" className='pc_rental_image' />
                                </div>
                                <div className='rental_pc_name'>{data.Brand}</div>
                                <div className='rental_pc_spec'>
                                {Object.keys(data).map(property => {
                                    if (property !== 'Brand' && property !== 'Price') {
                                        return <li key={property}>{data[property]}</li>;
                                    }
                                    return null;
                                })}
                                </div>
                                {/* <div className='rental_pc_price'>
                                    Rs. {data.Price} / month
                                </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default RentalPage;