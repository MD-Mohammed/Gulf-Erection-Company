import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './ProjectPage.css'

import ProjectData from "../Data/ProjectDetails.json";

function ProjectPage() {

    function MobileComponent() {

        return(
            <>

                <div className="desktop-projectpage-main-container" id="mobile-projects-component">
                    
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

        function ProjectVideo(props) {

            return(
                    <div>
                        {   props.ProjectObject === undefined ?
                            <div></div> : 
                            
                            <div className="desktop-projectpage-card-back-video-container">
                                        <img className="desktop-projectpage-card-back-video-icon" src={ process.env.PUBLIC_URL + "/images/youtube-icon.png" }/>
                                        <a href="" className="desktop-projectpage-card-back-video-play">Watch Video</a>
                            </div>
                        }
                    </div>
            )
        }

        return(
            <>
                <div className="desktop-projectpage-main-container" id="desktop-projects-component">
                    
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
                                
                                <div className="desktop-projectpage-cards-container">

                                    <div className="desktop-projectpage-card">
                                        
                                        <div className="desktop-projectpage-card-front">

                                            <div className="desktop-projectpage-cards-image-container">
                                                <img className="desktop-projectpage-cards-image" src={ process.env.PUBLIC_URL + project.ProjectImage }/>
                                            </div>
            
                                            <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%", "margin-left": "10%", "margin-right": "10%"}}>{project.ProjectName}</h6>
                                        
                                        </div>

                                        <div className="desktop-projectpage-card-back">
                                            
                                            <h5 className="desktop-projectpage-card-back-header">{project.ProjectName}</h5>

                                            <h6 style={{"text-align": "left", "margin-left": "5%"}}>About the project</h6>

                                            <p className="desktop-projectpage-card-back-description">{project.ProjectDescription}</p>

                                            <div style={{"display": "flex"}}>

                                                <h6 style={{"text-align": "left", "margin-left": "5%"}}>Client :</h6>

                                                <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{project.ClientName}</h6>

                                            </div>

                                            <div style={{"display": "flex"}}>

                                                <h6 style={{"text-align": "left", "margin-left": "5%"}}>Year :</h6>

                                                <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{project.Year}</h6>

                                            </div>
                                            
                                            <ProjectVideo ProjectObject={project.VideoLink}/>

                                        </div>

                                    </div>

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