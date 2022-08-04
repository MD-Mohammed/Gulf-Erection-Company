import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './ProjectPage.css'

import ProjectData from "../Data/ProjectDetails.json";

function ProjectPage() {

    function MobileComponent() {

        return(
            <>

                <div className="desktop-projectpage-main-container">
                    
                    <div className="desktop-header-container" style={{"width": "80%", "margin-top": "50px"}}>
                            
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "60%", "width": "12.5%", "margin-top": "-5%"}} src={ process.env.PUBLIC_URL + "/images/projects-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "font-size": "180%"}}>
                                Projects
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div className="mobile-projectpage-cards-main-container">

                        {
                            ProjectData.map((project) => (
                                
                                <div className="mobile-projectpage-cards">

                                <div className="desktop-projectpage-cards-image-container">
                                    <img className="desktop-projectpage-cards-image" src={ process.env.PUBLIC_URL + project.ProjectImage }/>
                                </div>
    
                                <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%"}}>{project.ProjectName}</h6>
    
                            </div>

                            ))
                        }



                    </div>
                    

                </div>

            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
                <div className="desktop-projectpage-main-container">
                    
                    <div className="desktop-header-container">
                            
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "70%", "width": "12.5%", "margin-top": "-5%"}} src={ process.env.PUBLIC_URL + "/images/projects-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>
                                Projects
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div className="desktop-projectpage-cards-main-container">

                        {
                            ProjectData.map((project) => (
                                
                                <div className="desktop-projectpage-cards">

                                    <div className="desktop-projectpage-cards-image-container">
                                        <img className="desktop-projectpage-cards-image" src={ process.env.PUBLIC_URL + project.ProjectImage }/>
                                    </div>
        
                                    <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%"}}>{project.ProjectName}</h6>
    
                                </div>

                            ))
                        }

                    </div>

                </div>
            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 

export default ProjectPage;