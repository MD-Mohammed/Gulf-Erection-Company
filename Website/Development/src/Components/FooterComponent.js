import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";

import './FooterComponent.css'

function FooterComponent() {

    function FooterScrollToElement(ComponentName){
        var element = document.getElementById(`${ComponentName}`);
        var headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    function MobileComponent() {

        return(
            <>
                <div className="mobile-footer-main-container">

                    <div className="mobile-footer-content-container">
                    
                        <div className="mobile-footer-content-logo-container">

                            <div className="mobile-footer-content-logo-image-container">
                                <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.png" }  />
                            </div>

                            <div className="mobile-footer-content-logo-text-container">
                                <p style={{"font-size": "180%", "margin-top": "4%"}}>GULF ERECTION</p>
                                <p style={{"font-size": "150%", "font-weight": "500", "margin-top": "-12%"}}>CONSTRUCTIONS</p>
                            </div>

                        </div>
                    
                    </div>

                    <div className="mobile-footer-content-details-container" >

                        <div className="mobile-footer-content-details-icon-container">
                            <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/location-icon.png" }  />
                        </div>

                        <div className="mobile-footer-content-details">
                            <p style={{"font-size": "125%", "font-weight": "500"}}>Gulf Erection Co LLC</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>Al Manhal - W15-02 - Abu Dhabi United Arab Emirates</p>
                        </div>

                    </div>

                    <div className="mobile-footer-line" />

                    <div className="mobile-footer-content-details-container">

                        <div className="mobile-footer-content-details-icon-container">
                            <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/call-icon.png" }  />
                        </div>

                        <div className="mobile-footer-content-details">
                            <p style={{"font-size": "100%"}}>+971 2 443 5421 – Abu Dhabi</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 443 6765 – Abu Dhabi</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 722 1715 – Al Ain</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 443 4357 – Fax</p>
                        </div>

                    </div>

                    <div className="mobile-footer-line" />

                    <div className="mobile-footer-content-details-container">

                        <div className="mobile-footer-content-details-icon-container">
                        <img style={{"height": "75%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/email-icon.png" }  />
                        </div>

                        <div className="mobile-footer-content-details">
                            <p style={{"font-size": "100%"}}>gec@gulferection.ae</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>reception@gulferection.ae</p>
                            <p style={{"font-size": "100%", "margin-top": "-5%"}}>info@gulferection.ae</p>
                        </div>

                    </div>

                    <div className="mobile-footer-signoff-container">
                        <span>©2022 Gulf Erection</span>
                        <span>Designed by <span style={{"color": "red"}}>Team Alcodithm</span></span>
                    </div>

                </div>
            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
                <div className="desktop-footer-main-container">

                    <div className="desktop-footer-content-container">
                        
                        <div className="desktop-footer-content-logo-container">

                            <div className="desktop-footer-content-logo-image-container">
                                <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.png" }  />
                            </div>

                            <div className="desktop-footer-content-logo-text-container">
                                <p style={{"font-size": "270%", "margin-top": "6%"}}>GULF ERECTION</p>
                                <p style={{"font-size": "220%", "font-weight": "500", "margin-top": "-8%"}}>CONSTRUCTIONS</p>
                            </div>

                        </div>

                        <div className="desktop-footer-content-details-container">

                            <div className="desktop-footer-content-details-icon-container">
                                <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/location-icon.png" }  />
                            </div>

                            <div className="desktop-footer-content-details">
                                <p style={{"font-size": "125%", "font-weight": "500"}}>Gulf Erection Co LLC</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>Al Manhal - W15-02 - Abu Dhabi United Arab Emirates</p>
                            </div>

                        </div>

                        <div className="desktop-footer-content-details-container">

                            <div className="desktop-footer-content-details-icon-container">
                                <img style={{"height": "100%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/call-icon.png" }  />
                            </div>

                            <div className="desktop-footer-content-details">
                                <p style={{"font-size": "100%"}}>+971 2 443 5421 – Abu Dhabi</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 443 6765 – Abu Dhabi</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 722 1715 – Al Ain</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>+971 2 443 4357 – Fax</p>
                            </div>

                        </div>

                        <div className="desktop-footer-content-details-container">

                            <div className="desktop-footer-content-details-icon-container">
                                <img style={{"height": "75%", "width": "100%"}} src={ process.env.PUBLIC_URL + "/images/email-icon.png" }  />
                            </div>

                            <div className="desktop-footer-content-details">
                                <p style={{"font-size": "100%"}}>gec@gulferection.ae</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>reception@gulferection.ae</p>
                                <p style={{"font-size": "100%", "margin-top": "-5%"}}>info@gulferection.ae</p>
                            </div>

                        </div>             

                    </div>

                    <div style={{"display": "flex", "justify-content": "center", "margin": "1%"}}>
                        <div className="desktop-footer-line" />
                    </div>

                    <div className="desktop-footer-navigation-container">
                        <div style={{"width": "50%", "display":"flex", "justify-content": "space-evenly", "align-items": "center"}}>
                        
                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-home-component')}><span className="desktop-footer-navigation-button-text">Home</span></button>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-aboutus-component')}><span className="desktop-footer-navigation-button-text">About us</span></button>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-services-component')}><span className="desktop-footer-navigation-button-text">Services</span></button>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-clients-component')}><span className="desktop-footer-navigation-button-text">Clients</span></button>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-projects-component')}><span className="desktop-footer-navigation-button-text">Projects</span></button>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <button className="desktop-footer-navigation-button" onClick={() => FooterScrollToElement('desktop-contact-component')}><span className="desktop-footer-navigation-button-text">Contact us</span></button>

                        </div>
                    </div>

                    <div className="desktop-footer-signoff-container">
                        <span>©2022 Gulf Erection</span>
                        <span>Designed by <span style={{"color": "red"}}>Team Alcodithm</span></span>
                    </div>

                </div>
            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 

export default FooterComponent;