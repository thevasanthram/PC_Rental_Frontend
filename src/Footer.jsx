import React from "react";
import './Footer.css'
import FaceBookLogo from './Facebook_icon.png'
import InstagramLogo from './Instagram_icon.png'

function Footer(){
    return (
        <div id="footer_container">
            <div id="about_us_container">
                <div className="footer_heading">About Us</div>
                <div className="footer_content">At ABC Systems, we're passionate about providing high-quality laptop rental services that meet the unique needs of our customers. With over two years of experience in the industry, we've established ourselves as a trusted and reliable source for laptops in India. Whether you need a laptop for a day or a month, we have the perfect rental package for you.</div>
            </div>
            <div id="contact_container">
                <div id="contact_us_container">
                    <div className="footer_heading">Contact Us</div>
                    <div id="contact_list_container">
                        <div className="footer_content">Address: ABC nagar, Chennai</div>
                        <div className="footer_content">Mobile: 9876543210</div>
                        <div className="footer_content">E-mail: pcrental@gmail.com</div>
                    </div>
                </div>
                <div id="social_media_container">
                    <div className="footer_heading">Follow us on social media</div>
                    <div id="social_media_list">
                        <img src={FaceBookLogo} alt="" className="social_media_logo"/>
                        <img src={InstagramLogo} alt="" className="social_media_logo"/>
                    </div>
                </div>
            </div>
            <div id="copyrights_content">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. © abcSystems™ Ltd. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;