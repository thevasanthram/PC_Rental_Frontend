import React, { useState } from "react";
import './../css/Customization.css'
import Laptop_Icon from './../images/laptop_icon.png'

function Customization(){
    const [Brand , changeBrand] = useState('')
    const [Core , changeCore] = useState('')
    const [RAM , changeRAM] = useState('')
    const [Storage , changeStorage] = useState('')
    const [ScreenSize , changeScreenSize] = useState('')
    const [Price, changePrice] = useState(0)


    const laptopData = [{
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    } ]


    function changeInputCondition(event){
        changePrice(0)
        switch(event.target.id){
            case 'input_brand': changeBrand(event.target.value); break;
            case 'input_processor': changeCore(event.target.value); break;
            case 'input_ram': changeRAM(event.target.value); break;
            case 'input_storage': changeStorage(event.target.value); break;
            case 'input_screen_size': changeScreenSize(event.target.value); break;
        }
    }

    function getPrice(){
        if(Brand != 'Brand' && Core != 'Processor' && RAM != 'RAM' && Storage != 'Storage' && ScreenSize != 'Screen Size' && Brand != '' && Core != '' && RAM != '' && Storage != '' && ScreenSize != ''){
            console.log(Brand)
            console.log(Core.replace('Intel ',''))
            console.log(RAM.replace(' ','')+' RAM')
            console.log(Storage.replace(' ',''))
            console.log(laptopData.length)
            laptopData.map( (laptop) => {
                if(laptop.Brand == Brand && laptop.Core == Core.replace('Intel ','') && laptop.RAM == RAM.replace(' ','')+' RAM' && laptop.Storage == Storage.replace(' ','')){
                    changePrice(laptop.Price)
                }else{
                    console.log('not')
                }
            })
        }else{
            document.getElementById('customizatoin_error_msg').style.display = 'block'
            setTimeout( () => {
                document.getElementById('customizatoin_error_msg').style.display = 'none'
            },3000)
        }
    }
    return (
        <div id="customization_component">
            <div id='customization_condition_container'>
                <select id="input_brand" className='customization_condition_input' onChange={(event) => changeInputCondition(event)}>
                    <option value="Brand">Brand</option>
                    <option value="Dell">Dell</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="HP">HP</option>
                </select>
                <select id="input_processor" className='customization_condition_input' onChange={(event) => changeInputCondition(event)}>
                    <option value="Processor">Processor</option>
                    <option value="Intel Core i3">Core i3</option>
                    <option value="Intel Core i5">Core i5</option>
                    <option value="Intel Core i7">Core i7</option>
                </select>
                <select id="input_ram" className='customization_condition_input' onChange={(event) => changeInputCondition(event)}>
                    <option value="RAM">RAM</option>
                    <option value="8 GB">8 GB</option>
                    <option value="16 GB">16 GB</option>
                </select>
                <select id="input_storage" className='customization_condition_input' onChange={(event) => changeInputCondition(event)}>
                    <option value="Storage">Storage</option>
                    <option value="256 GB SSD">256 GB SSD</option>
                    <option value="512 GB SSD">512 GB SSD</option>
                    <option value="1 TB SSD">1 TB SSD</option>
                </select>
                <select id="input_screen_size" className='customization_condition_input' onChange={(event) => changeInputCondition(event)}>
                    <option value="Screen Size">Screen Size</option>
                    <option value="14 inches">14</option>
                    <option value="15 inches">15</option>
                </select>
            </div>
            <div id="customization_main_content">
                <img src={Laptop_Icon} alt="" id="customization_laptop_image" />
                <div id="customization_laptop_details_container">
                    <div id='customization_laptop_specs'>
                        <div id="customization_laptop_brand">Brand: {Brand}</div>
                        <div id="customization_laptop_core">Processor: {Core}</div>
                        <div id="customization_laptop_ram">RAM: {RAM}</div>
                        <div id="customization_laptop_storage">Storage: {Storage}</div>
                        <div id="customization_laptop_screen">Screen Size: {ScreenSize}</div>
                    </div>
                    {Price == 0 ? <button id='customization_laptop_price' onClick={getPrice}>Get Price</button> : <div id="customization_laptop_prices">Price: {Price}</div>}
                    <span id="customizatoin_error_msg">Please select all inputs</span>
                </div>
            </div>
        </div>
    )
}

export default Customization;