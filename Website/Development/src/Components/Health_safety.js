import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './Health_safety.css';
import './main.css';

import Brochure from "../Data/GEC-Profile.pdf"

function HealthSafety() {

    const [ReadMore, setReadMore] = useState(false);
    const [Badge_A, setBadge_A] = useState(false);
    const [Badge_B, setBadge_B] = useState(false);
    const [Badge_C, setBadge_C] = useState(false);

    function DesktopComponent() {

       

        return(
            <div className="desktop_Health_safety_main_container">

                    {/* <div className="desktop-header-container" style={{"width": "85%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center"}}>  
                            <img style={{"width": "8%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/HealthSafety.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400","marginLeft":"-3%"}}>
                            Our Health, Safety, and Environment Responsibilities
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div> */}

                    <div className="desktop-Health-safety-sub-container">
                       
                        <div className="desktop-Healthy_safety-content-cards">
                        
                            <iframe 
                                className="desktop-Health_safety-content-video-container"
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/CSV8GtV7M2U?rel=0" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen="true">
                            </iframe>

                        </div>

                    </div>
            </div>

        );   
    }

    function MobileComponent() {

       
        return(
             <div className="desktop_Health_safety_main_container">

                    {/* <div className="mobile-header-container" style={{"margin-top": "10%", "width": "80%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center"}}>  
                            <img style={{"width": "30%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/HealthSafety.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400","marginLeft":"-11%","fontSize":"30px"}}>
                             Health and Safety 
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div> */}

                    <div className="desktop-Health-safety-sub-container" style={{"height": "350px", "margin-bottom": "20%"}}>
                       
                        <div className="desktop-Healthy_safety-content-cards" style={{"width": "100%", "height": "100%"}}>
                        
                            <iframe 
                                className="desktop-Health_safety-content-video-container"
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/CSV8GtV7M2U" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen="true">
                            </iframe>

                        </div>
                            
                    </div>
            </div>
        );
    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? 
        (
            <>
            
                <MobileComponent />
            
            </>
            
        )
            : 
        (
            <>
            
                <DesktopComponent /> 
            
            </>
            
        )

}
export default HealthSafety;