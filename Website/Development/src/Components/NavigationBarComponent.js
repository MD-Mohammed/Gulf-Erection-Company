import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import "./NavigationBarComponent.css"

import Brochure from "../Data/GEC-Profile.pdf"

function NavigationBar(props) {

    const [DropMenu, setDropMenu] = useState(false);

    function NavigationScrollToElement(ComponentName){
        var element = document.getElementById(`${ComponentName}`);
        var headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });

        setDropMenu(false);

    }

    function MobileComponent() {

        return(
            <>
    
                <div className="mobile-navbar-main-container">

                    <div className="mobile-navbar-logo-main-container">

                        <img style={{"height": "50%", "width": "30%", "margin-bottom": "2%", "margin-left": "5%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.png" }  />
                        <div className="mobile-navbar-logo-text-container">
                            <span className="mobile-navbar-logo-text-H1">GULF ERECTION</span>
                            <span className="mobile-navbar-logo-text-H1 mobile-navbar-logo-text-H2">CONSTRUCTIONS</span>
                        </div>

                    </div>

                    <div className="mobile-navbar-buttons-main-container">

                        <div className="mobile-navbar-quote-button" onClick={() => NavigationScrollToElement('mobile-contact-component')}>
                            <span style={{"margin-left": "5%", "color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400", "font-size": "80%"}}>Request Quote</span>
                        </div>

                        <div className="mobile-menu-button" onClick={() => setDropMenu(!DropMenu)}>
                            <img 
                                style = { DropMenu ? {"height": "30%", "width": "50%"} : {"height": "40%", "width": "50%"} } 
                                src = { DropMenu ? process.env.PUBLIC_URL + "/images/menu-up-icon.png" : process.env.PUBLIC_URL + "/images/Menu-icon.png" } 
                            />
                        </div>

                    </div>

                </div>

                {
                    DropMenu &&
                        <div style={{"display":"flex", "justify-content": "flex-end", "position": "absolute","width": "100%", "z-index": "3"}}>
                            <div className="mobile-menu-list-container">
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-home-component')}>Home</button>
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-aboutus-component')}><div>About</div><div>us</div></button>
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-projects-component')}>Projects</button>
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-services-component')}>Services</button>
                                <a href={Brochure} download="Gulf Erection Company" target="_blank" className="mobile-navbar-button-containers" style={{"color": "white"}}><span style={{"margin-left": "10%"}}>Download Profile</span></a>
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-clients-component')}>Clients</button>
                                <button className="mobile-navbar-button-containers" onClick={() => NavigationScrollToElement('mobile-contact-component')}>Contacts</button>
                            </div>
                        </div>
                }
    
            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
    
                <div className="desktop-navbar-main-container">
    
                    <div className="desktop-navbar-logo-main-container">
    
                        <div className="desktop-navbar-logo-icon-container">
                            <img style={{"height": "70%", "width": "70%", "margin-bottom": "2%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.png" }  />
                        </div>
    
                        <div className="desktop-navbar-logo-text-container">
                            <span className="desktop-navbar-logo-text-H1">GULF ERECTION</span>
                            <span className="desktop-navbar-logo-text-H1 desktop-navbar-logo-text-H2">CONSTRUCTIONS</span>
                        </div>
    
                    </div>
    
                    <div className="desktop-navbar-buttons-main-container">
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-home-component')}>HOME</div>
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-aboutus-component')}>ABOUT US</div>
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-projects-component')}>PROJECTS</div>
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-services-component')}>SERVICES</div>
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-clients-component')}>CLIENTS</div>
                        <div className="desktop-navbar-button-containers" onClick={() => NavigationScrollToElement('desktop-contact-component')}>CONTACT</div>
                    </div>
    
                    <div className="desktop-navbar-quote-button-main-container">

                        <a href={Brochure} download="Gulf Erection Company" target="_blank" className="desktop-navbar-quote-button">
                            <img style={{"height": "25px", "width": "25px"}} src={ process.env.PUBLIC_URL + "/images/download-icon.png"} />
                            <span style={{"margin-left": "5%", "color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "300"}}>Download Brochure</span>
                        </a>
                        
                        <button className="desktop-navbar-quote-button" onClick={() => NavigationScrollToElement('desktop-contact-component')}>
                            <img style={{"height": "25px", "width": "25px"}} src={ process.env.PUBLIC_URL + "/images/quote-icon.png"} />
                            <span style={{"margin-left": "5%", "color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "300"}}>Request Quote</span>
                        </button>

                    </div>

                </div>
    
            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 
export default NavigationBar;