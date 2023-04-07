import React from 'react';
import './../css/LandingPage.css'
import ThreeLaptops from './../images/threelaptops.png'
import BannerLaptop from './../images/banner-mockup.png'
import TwoLaptops from './../images/lenovo-laptop-collection.png'
import Customization_image from './../images/customization_image.gif';
import WelcomeImage from './../images/laptops.png'
import How_it_works_image from './../images/how_it_works.png'

function LandingPage(){
    return (
        <div id='landing_page_container'>
            <div className='landing_page_card'>
                <div className='landing_page_text_container'>
                    <div className='landing_page_heading'>Laptops on Rent</div>
                    <div className='landing_page_content'>Welcome to ABC Systems, your source for high-quality laptop rentals. We offer a wide range of models and customization options to meet your unique needs.</div>
                </div>
                <img src={WelcomeImage} alt="" style={{width:'45%'}}/>
            </div>

            <div className='landing_page_card'>
                <img src={BannerLaptop} alt="" style={{width:'45%'}}/>
                <div className='landing_page_text_container'>
                    <div className='landing_page_heading'>Features and Benefits</div>
                    <div className='landing_page_content'>
                        <li>A wide range of laptop models to choose from</li>
                        <li>Affordable rental rates</li>
                        <li>Flexible rental periods to suit different needs</li>
                        <li>High-quality laptops with the latest hardware and software</li>
                        <li>Fast and reliable delivery or pickup options</li>
                        <li>Professional technical support and customer service</li>
                    </div>
                </div>
            </div>

            <div className='landing_page_card'>
                <div className='landing_page_text_container'>
                    <div className='landing_page_heading'>How it Works</div>
                    <div className='landing_page_content'>Select your ideal laptop from our website and make an online payment. We'll deliver the same laptop to you in no time.</div>
                </div>
                <img src={How_it_works_image} alt="" style={{width: '45%'}}/>
            </div>

            <div className='landing_page_card'>
                <img src={ThreeLaptops} alt="" style={{width:'50%'}}/>
                <div className='landing_page_text_container'>
                    <div className='landing_page_heading'>Rental</div>
                    <div className='landing_page_content'>
                        <li>Rent the latest laptops from top brands at affordable prices, with flexible rental packages to suit your needs.</li>
                        <li>Our rental selection includes high-performance laptops for work, gaming, and more. Get started today and enjoy the benefits of a rental laptop!</li>
                    </div>
                </div>
            </div>

            <div className='landing_page_card'>
                <div className='landing_page_text_container'>
                    <div className='landing_page_heading'>Customization</div>
                    <div className='landing_page_content'>
                        <li>Customize your rental laptop with the software and accessories you need to succeed, from extra memory to specialized software.</li>
                        <li>Our team can work with you to create a customized rental package that meets your unique needs and budget. Contact us today to learn more!</li>
                    </div>
                </div>
                <img src={Customization_image} alt="" style={{width: '50%'}}/>
            </div>
        </div>
    )
}

export default LandingPage;