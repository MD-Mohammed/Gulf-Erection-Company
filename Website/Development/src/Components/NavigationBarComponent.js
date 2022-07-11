import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './NavigationBarComponent.css';

function NavigationBarComponent() {

    return(
        <>
            <div className="navbar-main-container">
                <div className="navbar-logo-container">
                    <div className="navbar-logo">
                        <img style={{"height": "65%", "width": "65%", "flex": "1", "margin-bottom": "2%"}} src="/images/GEC-Logo.svg" />
                    </div>
                    <div className="navbar-logo-name">
                        <span style={{"font-family": "'Montserrat', sans-serif", "font-size": "180%", "margin-left": "-15%", "font-weight": "500"}}>Gulf Erection</span>
                        <span style={{"font-family": "'Montserrat', sans-serif", "margin-left": "-12.5%", "margin-top": "-5%", "letter-spacing": "6px", "font-weight": "300"}}>constructions</span>
                    </div>
                </div>
                <div className="navbar-buttons-main-container">
                    <div className="navbar-buttons-container">
                        <a href="#" className="navbar-buttons-style" >HOME</a>
                        <a href="#" className="navbar-buttons-style" >ABOUT US</a>
                        <a href="#" className="navbar-buttons-style" >SERVICES</a>
                        <a href="#" className="navbar-buttons-style" >PROJECTS</a>
                        <a href="#" className="navbar-buttons-style" >GALLERY</a>
                        <a href="#" className="navbar-buttons-style" >CLIENT</a>
                        <a href="#" className="navbar-buttons-style" >CONTACT US</a>
                    </div>
                </div>
                <div style={{"background-color": "black", "width" : "1%"}}>Button</div>
            </div>
        </>
    );
}

export default NavigationBarComponent;