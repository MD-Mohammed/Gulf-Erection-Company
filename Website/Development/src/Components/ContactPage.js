import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";

import './ContactPage.css'
import './main.css'

function ContactPage() {

    function MobileComponent() {

        return(
            <>
    
            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
    
                <div className="desktop-contactpage-main-container">

                    <div className="desktop-header-container">
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%", "margin-top": "10%"}}>  
                            <img style={{"height": "12.5%", "width": "12.5%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/contact-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>
                                Contact us
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div className="desktop-contactpage-content-container">


                        <div className="desktop-contactpage-form-container">

                            <h2 className="desktop-contactpage-form-container-header">Let us contact you</h2>

                            <div className="desktop-contactpage-form-field-container">

                                <div className="desktop-contactpage-form-field">

                                    <p className="desktop-contactpage-form-field-label">First Name *</p>
                                    <input className="desktop-contactpage-form-field-input" placeholder="Enter your first name"/>

                                </div>

                                <div className="desktop-contactpage-form-field">

                                    <p className="desktop-contactpage-form-field-label">Last Name *</p>
                                    <input className="desktop-contactpage-form-field-input" placeholder="Enter your last name"/>
                                    
                                </div>

                            </div>

                            <div className="desktop-contactpage-form-field-container">

                                <div className="desktop-contactpage-form-field">

                                    <p className="desktop-contactpage-form-field-label">Email Address *</p>
                                    <input className="desktop-contactpage-form-field-input" placeholder="Enter your email id"/>

                                </div>

                                <div className="desktop-contactpage-form-field">

                                    <p className="desktop-contactpage-form-field-label">Contact Number *</p>
                                    <input className="desktop-contactpage-form-field-input" placeholder="Enter your contact number"/>
                                    
                                </div>

                            </div>

                            <div className="desktop-contactpage-form-field-container" style={{"height": "200px"}}>

                                <div className="desktop-contactpage-form-field" style={{"width": "100%"}}>

                                    <p className="desktop-contactpage-form-field-label" style={{"margin-left": "1%", "margin-bottom": "4%"}}>Do you have any queries ?</p>
                                    <input className="desktop-contactpage-form-field-input" style={{"margin-left": "1%", "width": "97.5%", "height": "80%"}}/>

                                </div>

                            </div>

                            <button className="desktop-contactpage-form-button">SEND MESSAGE</button>

                        </div>

                        <div className="desktop-contactpage-map-container">

                            <iframe 
                                className="desktop-contactpage-map"
                                width="100%" 
                                height="100%" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                id="gmap_canvas" 
                                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Gulf%20Erection%20Co%20LLC+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        
                        </div>

                    </div>

                </div>

            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 

export default ContactPage;