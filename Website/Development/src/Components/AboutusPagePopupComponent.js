import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import "./AboutusPagePopupComponent.css"

function AboutusPagePopup() {

    function MobileComponent() {

        return(
            <>
    
            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
                <div className="desktop-aboutus-popup-modal">

                    <div className="desktop-aboutus-popup-main-container">

                        <div className="desktop-aboutus-popup-close-button-container">
                            <button className="desktop-aboutus-popup-close-button">
                                <span className="desktop-aboutus-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="desktop-aboutus-popup-content-container">
                            <div style={{"height": "500px"}}>hello</div>
                            <div style={{"height": "500px"}}>hello</div>
                            <div style={{"height": "500px"}}>hello</div>
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

export default AboutusPagePopup;