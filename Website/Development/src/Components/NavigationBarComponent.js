import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import "./NavigationBarComponent.css"

function NavigationBar() {

    return(
        <>

            <div className="navbar-main-container">

                <div className="navbar-logo-main-container">

                    <div className="navbar-logo-icon-container">
                        <img style={{"height": "70%", "width": "70%", "margin-bottom": "2%"}} src={ process.env.PUBLIC_URL + "/images/GEC-Logo.svg"}  />
                    </div>

                    <div className="navbar-logo-text-container">
                        <span className="navbar-logo-text-H1">GULF ERECTION</span>
                        <span className="navbar-logo-text-H1 navbar-logo-text-H2">CONSTRUCTIONS</span>
                    </div>

                </div>

                <div className="navbar-buttons-main-container">
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">HOME</a></div>
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">ABOUT US</a></div>
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">SERVICES</a></div>
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">PROJECTS</a></div>
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">CLIENTS</a></div>
                    <div className="navbar-button-containers"><a href="#" className="navbar-button-style">CONTACT</a></div>
                </div>

                <div className="navbar-quote-button-main-container">
                    <button className="navbar-quote-button">
                        <img style={{"height": "60%", "width": "17.5%"}} src={ process.env.PUBLIC_URL + "/images/quote-icon.png"} />
                        <span style={{"margin-left": "5%", "color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "300"}}>Request Quote</span>
                    </button>
                </div>

            </div>

        </>
    );
} 
export default NavigationBar;