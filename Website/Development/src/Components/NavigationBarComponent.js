import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './NavigationBarComponent.css';

function NavigationBarComponent() {

    return(
        <>
            <div className="navbar-main-container">

                <div style={{"background-color": "black"}} className="navbar-logo-container">
                    <div className="navbar-button-style">Logo</div>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Home</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">About us</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Services</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Projects</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Gallery</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Clients</button>
                </div>

                <div className="navbar-sub-container">
                    <button className="navbar-button-style">Contact us</button>
                </div>

                <div style={{"flex" : "1", "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center"}} className="navbar-sub-container">
                    <div style={{"background-color": "red", "flex": "2"}}>h</div>
                    <div style={{"background-color": "white", "flex": "1"}}>h</div>
                </div>

            </div>
        </>
    );
}

export default NavigationBarComponent;