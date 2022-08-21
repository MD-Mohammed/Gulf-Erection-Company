import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactPage.css'
import './main.css'

function ContactPage() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6xof54p', 'template_bwkttvn', form.current, 'PgHd1TPJxOLJ575zs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    function MobileComponent() {

        return(
            <>
                <div className="desktop-contactpage-main-container" id="mobile-contact-component">
                    
                    <div className="mobile-header-container" style={{"width": "55%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "50%", "width": "15%", "margin-top": "-5%"}} src={ process.env.PUBLIC_URL + "/images/contact-icon.png" }/>
                            
                            <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>
                                Contact us
                            </h3>
                        </div>

                        <div className="mobile-header-line" style={{"margin-top": "2%"}} />

                    </div>

                    <div className="mobile-contactpage-content-container">
                    <form ref={form} onSubmit={sendEmail}   className="mobile-contactpage-form-container">
                        

                            <h3 className="mobile-contactpage-form-container-header" style={{"margin-top": "15%"}}>Let us contact you</h3>

                            <div className="mobile-contactpage-form-field-container" style={{"margin-top": "10%"}}>

                                <div className="mobile-contactpage-form-field">

                                    <p className="mobile-contactpage-form-field-label">First Name *</p>
                                    <input className="mobile-contactpage-form-field-input" placeholder="Enter your first name" name="first_name" required/>

                                </div>

                            </div>

                            <div className="mobile-contactpage-form-field-container">

                                <div className="mobile-contactpage-form-field">

                                    <p className="mobile-contactpage-form-field-label">Last Name *</p>
                                    <input className="mobile-contactpage-form-field-input" placeholder="Enter your last name" name="last_name" required/>
                                    
                                </div>

                            </div>

                            <div className="mobile-contactpage-form-field-container">

                                <div className="mobile-contactpage-form-field">

                                    <p className="mobile-contactpage-form-field-label">Email Address *</p>
                                    <input className="mobile-contactpage-form-field-input" placeholder="Enter your email id" name="Email_add" required/>

                                </div>

                            </div>

                            <div className="mobile-contactpage-form-field-container">

                                <div className="mobile-contactpage-form-field">

                                    <p className="mobile-contactpage-form-field-label">Contact Number *</p>
                                    <input className="mobile-contactpage-form-field-input" placeholder="Enter your contact number" name="contact_no" required/>
                                    
                                </div>

                            </div>

                            <div className="mobile-contactpage-form-field-container" style={{"height": "200px"}}>

                                <div className="mobile-contactpage-form-field" style={{"width": "100%"}}>

                                    <p className="mobile-contactpage-form-field-label" style={{"margin-left": "5%", "margin-bottom": "5%"}}>Do you have any queries ?</p>
                                    <textarea className="mobile-contactpage-form-field-input" style={{"margin-left": "5%", "width": "90%", "height": "80%","text-indent":"0%"}} name="feedback" required/>

                                </div>

                            </div>

                            <button className="mobile-contactpage-form-button" type="submit" value="Send" ref={form} onSubmit={sendEmail}>SEND MESSAGE</button>

                        
                        </form>

                        <div className="mobile-contactpage-map-container">

                            <iframe 
                                className="mobile-contactpage-map"
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

    function DesktopComponent() {

        return(
            <>
    
                <div className="desktop-contactpage-main-container" id="desktop-contact-component">

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

                        <form ref={form} onSubmit={sendEmail}   className="desktop-contactpage-form-container">
                            

                                <h2 className="desktop-contactpage-form-container-header">Let us contact you</h2>

                                <div className="desktop-contactpage-form-field-container">

                                    <div className="desktop-contactpage-form-field">

                                        <p className="desktop-contactpage-form-field-label">First Name *</p>
                                        <input className="desktop-contactpage-form-field-input" placeholder="Enter your first name" name="first_name" required/>

                                    </div>

                                    <div className="desktop-contactpage-form-field">

                                        <p className="desktop-contactpage-form-field-label">Last Name *</p>
                                        <input className="desktop-contactpage-form-field-input" placeholder="Enter your last name" name="last_name" required/>
                                        
                                    </div>

                                </div>

                                <div className="desktop-contactpage-form-field-container">

                                    <div className="desktop-contactpage-form-field">

                                        <p className="desktop-contactpage-form-field-label">Email Address *</p>
                                        <input className="desktop-contactpage-form-field-input" placeholder="Enter your email id" name="Email_add" required/>

                                    </div>

                                    <div className="desktop-contactpage-form-field">

                                        <p className="desktop-contactpage-form-field-label">Contact Number *</p>
                                        <input className="desktop-contactpage-form-field-input" placeholder="Enter your contact number" name="contact_no" required/>
                                        
                                    </div>

                                </div>

                                <div className="desktop-contactpage-form-field-container" style={{"height": "200px"}}>

                                    <div className="desktop-contactpage-form-field" style={{"width": "100%"}}>

                                        <p className="desktop-contactpage-form-field-label" style={{"margin-left": "1%", "margin-bottom": "4%"}}>Do you have any queries ?</p>
                                        <textarea className="desktop-contactpage-form-field-input" style={{" margin-left": "1%", "width": "97.5%", "height": "80%","text-indent":"0%"}} name="feedback" required/>

                                    </div>

                                </div>

                                <button className="desktop-contactpage-form-button"  type="click" value="Send" >SEND MESSAGE</button>

                        </form>

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