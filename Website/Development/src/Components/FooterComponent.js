import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";

import './FooterComponent.css'

function FooterComponent() {

    function MobileComponent() {

        return(
            <>
    
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
                        
                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">Home</span></a>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">About us</span></a>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">Services</span></a>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">Projects</span></a>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">Clients</span></a>
                            <p style={{"color": "white","text-align": "center", "font-size": "200%", "color": "red"}}>.</p>

                            <a className="desktop-footer-navigation-button"><span className="desktop-footer-navigation-button-text">Contact us</span></a>

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