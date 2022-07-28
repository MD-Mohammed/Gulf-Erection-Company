import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import "./NavigationBarComponent.css"

function NavigationBar() {

    function MobileComponent() {

        const [DropMenu, setDropMenu] = useState(false);

        return(
            <>
    
                <div className="mobile-navbar-main-container">

                    <div className="mobile-navbar-logo-main-container">

                        <img style={{"height": "50%", "width": "50%", "margin-bottom": "2%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.svg"}  />
                        <div className="mobile-navbar-logo-text-container">
                            <span className="mobile-navbar-logo-text-H1">GULF ERECTION</span>
                            <span className="mobile-navbar-logo-text-H1 mobile-navbar-logo-text-H2">CONSTRUCTIONS</span>
                        </div>

                    </div>

                    <div className="mobile-navbar-buttons-main-container">

                        <div className="mobile-navbar-quote-button">
                            <span style={{"margin-left": "5%", "color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400", "font-size": "80%"}}>Request Quote</span>
                        </div>

                        <div className="mobile-menu-button" onClick={() => setDropMenu(!DropMenu)}>
                            <img 
                                style = { DropMenu ? {"height": "35%", "width": "50%"} : {"height": "45%", "width": "50%"} } 
                                src = { DropMenu ? process.env.PUBLIC_URL + "/images/menu-up-icon.png" : process.env.PUBLIC_URL + "/images/Menu-icon.png" } 
                            />
                        </div>

                    </div>

                </div>

                {
                    DropMenu &&
                        <div style={{"display":"flex", "justifyContent": "flex-end", "position": "absolute","width": "100%", "z-index": "3"}}>
                            <div className="mobile-menu-list-container">
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">Home</a></div>
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">About us</a></div>
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">Services</a></div>
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">Projects</a></div>
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">Clients</a></div>
                                <div className="mobile-navbar-button-containers"><a href="#" className="mobile-navbar-button-style">Contacts</a></div>
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
                            <img style={{"height": "70%", "width": "70%", "margin-bottom": "2%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.svg"}  />
                        </div>
    
                        <div className="desktop-navbar-logo-text-container">
                            <span className="desktop-navbar-logo-text-H1">GULF ERECTION</span>
                            <span className="desktop-navbar-logo-text-H1 desktop-navbar-logo-text-H2">CONSTRUCTIONS</span>
                        </div>
    
                    </div>
    
                    <div className="desktop-navbar-buttons-main-container">
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">HOME</a></div>
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">ABOUT US</a></div>
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">SERVICES</a></div>
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">PROJECTS</a></div>
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">CLIENTS</a></div>
                        <div className="desktop-navbar-button-containers"><a href="#" className="desktop-navbar-button-style">CONTACT</a></div>
                    </div>
    
                    <div className="desktop-navbar-quote-button-main-container">
                        <button className="desktop-navbar-quote-button">
                            <img style={{"height": "60%", "width": "14%"}} src={ process.env.PUBLIC_URL + "/images/quote-icon.png"} />
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