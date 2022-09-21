import { render } from "@testing-library/react";
import React, {Fragment, useState, useEffect} from "react";
import './ProjectPage.css'

import ProjectData from "../Data/ProjectDetails.json";
import ProjectVideos from "../Data/ProjectVideos.json";

function ProjectPage() {

    const[ShowGallary, setShowGallary] = useState(false)
    const[ViewImage, setViewImage] = useState(false)
    const[ImageName, setImageName] = useState("")
    const[GalleryName, setGalleryName] = useState("")
    const[GalleryImages, setGalleryImages] = useState("")
    const[GalleryPath, setGalleryPath] = useState("")

    function MobileComponent() {

        function ProjectCard(props) {

            const[CardFlip, setCardFlip] = useState(false)

            return(
                <>
                
                    <div className={ CardFlip ? "mobile-projectpage-card-turned" : "mobile-projectpage-card-unturned" }>

                        <div className="mobile-projectpage-card-front">

                            <div className="desktop-projectpage-cards-image-container">
                                <img className="desktop-projectpage-cards-image" src={ process.env.PUBLIC_URL + "/Data/Project-Gallery" + props.ProjectImageObject + "/cover.jpg" }/>
                            </div>

                            <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%"}}>{props.ProjectNameObject}</h6>

                            <div className="mobile-projectpage-cards-info-container" onClick={() => setCardFlip(true)}>
                                <img className="mobile-projectpage-cards-info-icon" src={ process.env.PUBLIC_URL + "/images/info-icon.png" }/>
                            </div>

                        </div>

                        <div className="mobile-projectpage-card-back">

                            <h5 className="desktop-projectpage-card-back-header">{props.ProjectNameObject}</h5>

                            <h6 style={{"text-align": "left", "margin-left": "5%"}}>About the project</h6>

                            <p className="desktop-projectpage-card-back-description">{props.ProjectDescriptionObject}</p>

                            <div>
                                
                                <div style={{"display": "flex"}}>

                                    <h6 style={{"text-align": "left", "margin-left": "5%"}}>Client:</h6>

                                    <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{props.ClientNameObject}</h6>

                                </div>
                                
                            

                                {/* <div style={{"display": "flex"}}>

                                    <h6 style={{"text-align": "left", "margin-left": "5%"}}>Year :</h6>

                                    <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{props.YearObject}</h6>

                                </div> */}

                            </div>

                            <div className="mobile-projectpage-cards-info-container" style={{"width": "47.5%", "margin-left": "26.25%", "margin-right": "26.25%", "margin-top": "2%"}} 
                                onClick={() => {
                                    setGalleryName(props.ProjectNameObject)
                                    setGalleryImages(props.ProjectGalleryObject)
                                    setGalleryPath(process.env.PUBLIC_URL + "/Data/Project-Gallery" + props.ProjectImagePathObject)
                                    setShowGallary(true)
                                }}
                            >
                                <img className="mobile-projectpage-cards-info-icon" style={{"width": "15%", "margin-right": "2%"}} src={ process.env.PUBLIC_URL + "/images/show-imag-icon-yellow.png" }/>
                                <div className="desktop-projectpage-cards-gallery-text" style={{"font-size": "110%", "font-weight": "500", "margin-top": "-0.25%"}}>View Gallery</div>
                            </div>

                            <div className="mobile-projectpage-cards-flip-container" style={{"justify-content": "flex-end", "width": "95%"}}>
                                <img className="mobile-projectpage-cards-info-icon" src={ process.env.PUBLIC_URL + "/images/flip-icon.png" } onClick={() => setCardFlip(false)}/>
                            </div>

                        </div>

                    </div>
                
                </>
            )
        }

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

                    {
                        ProjectVideos.map((video) => (

                            <div className="mobile-projectpage-videocard-main-container">

                                <div className="mobile-projectpage-videocard">
        
                                    <div className="mobile-projectpage-video-container">
        
                                            <iframe
                                                style={{"border-radius": "10px"}} 
                                                width="100%"
                                                height="100%"
                                                src={video.VideoLink}
                                                title="YouTube video player" frameborder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowfullscreen="true"
                                            ></iframe>
        
                                    </div>
        
                                    <h6 style={{"font-family": "'Ubuntu', sans-serif","text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%"}}>{video.VideoTitle}</h6>
        
                                </div>
    
                            </div>
                        ))
                    }

                    <div className="mobile-projectpage-cards-main-container">

                        {
                            ProjectData.map((project) => (

                                <div className="mobile-projectpage-cards-container">
                                    
                                    <ProjectCard 
                                        ProjectNameObject={project.ProjectName} 
                                        ProjectImageObject={project.ProjectImagePath} 
                                        ClientNameObject={project.ClientName}
                                        YearObject={project.Year}
                                        ProjectImagePathObject={project.ProjectImagePath}
                                        ProjectGalleryObject={project.ProjectGallery}
                                        ProjectDescriptionObject={project.ProjectDescription}
                                    />
    
                                </div>

                            ))
                        }

                    </div>
                    
                </div>

                {
                    ShowGallary && 

                    <div className="mobile-popup-modal">

                        <div className="mobile-popup-main-container" style={{"background-color": "#16262E"}}>

                            <div className="mobile-popup-close-button-container">
                                <button className="mobile-popup-close-button" style={{"background-color": "#16262E"}} onClick={() => setShowGallary(false)}>
                                    <span className="mobile-popus-close-icon" style={{"color": "#EAC435"}}>X</span>
                                </button>
                            </div>

                            <div className="mobile-projectpage-gallery-popup-content-container" >
                                
                                <div className="mobile-popup-header-container" style={{"width": "80%", "margin-left": "10%", "margin-right": "10%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "justify-content": "center", "gap": "5%", "margin-bottom": "10%"}}> 

                                        <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/gallery-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%", "font-size": "150%", "color": "#EAC435"}}>
                                            { GalleryName }
                                        </h1>

                                    </div>

                                </div>

                                <div className="mobile-projectpage-gallery-main-container">

                                    {
                                        GalleryImages.map((gallery) => (
                                            <div className="mobile-projectpage-gallery-image-tile"
                                                onClick={() => {
                                                    setViewImage(true)
                                                    setImageName(GalleryPath + '/' + gallery)
                                             }}
                                            >
                                                <img style={{"height": "100%", "width": "100%", "border-radius": "5px", "object-fit": "cover"}} src={ GalleryPath + '/' + gallery }/>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                            
                        </div>

                        {
                            ViewImage &&

                            <div className="desktop-projectpage-gallery-image-popup-modal">
                            
                                <div className="desktop-projectpage-gallery-image-popup-modal-close-button-container">

                                    <button className="desktop-projectpage-gallery-image-popup-modal-close-button" onClick={() => setViewImage(false)}>
                                        <span className="desktop-popus-close-icon" style={{"color": "#EAC435"}}>X</span>
                                    </button>

                                </div>

                                <div className="mobile-projectpage-gallery-image-popup-image-container">
                                    <img style={{"width": "98%", "height": "98%", "object-fit": "cover", "border-radius": "20px"}} src={ ImageName }/>
                                </div>

                            </div>
                        }

                    </div>

                }

            </>
        );
    } 

    function DesktopComponent() {

        function DesktopProjectVideo(props) {

            return(
                    <div>
                        {   props.ProjectObject === undefined ?
                            <div></div> : 
                            
                            <div className="desktop-projectpage-card-back-video-container">
                                        <img className="desktop-projectpage-card-back-video-icon" src={ process.env.PUBLIC_URL + "/images/youtube-icon.png" }/>
                                        <a href={props.ProjectObject} target="_blank" className="desktop-projectpage-card-back-video-play">Watch Video</a>
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

                    <div className="desktop-projectpage-video-card-container">
                        
                    {
                        ProjectVideos.map((video) => (

                            <div className="desktop-projectpage-video-cards">

                                <div className="desktop-projectpage-video-card-video">

                                    <iframe
                                        style={{"border-radius": "10px"}} 
                                        width="100%"
                                        height="100%"
                                        src={video.VideoLink}
                                        title="YouTube video player" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen="true"
                                    ></iframe>

                                </div>

                                <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%", "margin-left": "10%", "margin-right": "10%"}}>{video.VideoTitle}</h6>

                            </div>
                        ))
                    }

                    </div>

                    <div className="desktop-projectpage-cards-main-container">

                        {
                            ProjectData.map((project) => (
                                
                                <div className="desktop-projectpage-cards-container">

                                    <div className="desktop-projectpage-card">
                                        
                                        <div className="desktop-projectpage-card-front">

                                            <div className="desktop-projectpage-cards-image-container">
                                                <img className="desktop-projectpage-cards-image" src={ process.env.PUBLIC_URL + "/Data/Project-Gallery" + project.ProjectImagePath + "/cover.jpg" }/>
                                            </div>
            
                                            <h6 style={{"text-align": "center", "color": "white" , "font-weight": "400", "margin-top": "5%", "margin-left": "10%", "margin-right": "10%"}}>{project.ProjectName}</h6>
                                        
                                        </div>

                                        <div className="desktop-projectpage-card-back">
                                            
                                            <h5 className="desktop-projectpage-card-back-header">{project.ProjectName}</h5>

                                            <h6 style={{"text-align": "left", "margin-left": "5%"}}>About the project</h6>

                                            <p className="desktop-projectpage-card-back-description">{project.ProjectDescription}</p>

                                            <div>
                                                <div style={{"display": "flex"}}>

                                                    <h6 style={{"text-align": "left", "margin-left": "5%"}}>Client:</h6>

                                                    <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{project.ClientName}</h6>

                                                </div>

                                                {/* <div style={{"display": "flex"}}>

                                                    <h6 style={{"text-align": "left", "margin-left": "5%"}}>Year :</h6>

                                                    <h6 style={{"text-align": "left", "margin-left": "5%", "color": "#FF4343"}}>{project.Year}</h6>

                                                </div> */}
                                            </div>

                                            <div className="desktop-projectpage-cards-gallery-container" 
                                                onClick={() => {
                                                    setGalleryName(project.ProjectName)
                                                    setGalleryImages(project.ProjectGallery)
                                                    setGalleryPath(process.env.PUBLIC_URL + "/Data/Project-Gallery" + project.ProjectImagePath)
                                                    setShowGallary(true)
                                                }} 
                                            >
                                                <img className="desktop-projectpage-cards-gallery-icon" src={ process.env.PUBLIC_URL + "/images/show-imag-icon-yellow.png" }/>
                                                <div className="desktop-projectpage-cards-gallery-text">View Gallery</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                    {
                        ShowGallary &&

                        <div className="desktop-popup-modal">

                            <div className="desktop-popup-main-container" style={{"background-color": "#16262E"}}>

                                <div className="desktop-popup-close-button-container">
                                    <button className="desktop-popup-close-button" style={{"background-color": "#16262E"}} onClick={() => setShowGallary(false)}>
                                        <span className="desktop-popus-close-icon" style={{"color": "#EAC435"}}>X</span>
                                    </button>
                                </div>

                                <div className="desktop-popup-content-container">

                                    <div style={{"margin-top": "2%","margin-bottom": "2%"}}>
                                
                                        <div style={{"display":"flex", "align-items": "center","justify-content": "center", "gap": "5%"}}>  
                                            <img style={{"height": "5%", "width": "5%"}} src={ process.env.PUBLIC_URL + "/images/gallery-icon.png" }/>
                                            
                                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "500", "margin-left": "-2%", "text-align": "center", "color": "#EAC435"}}>
                                                {GalleryName}
                                            </h1>
                                        </div>

                                    </div>

                                    <div className="desktop-projectpage-gallery-main-container">

                                        {
                                            GalleryImages.map((gallery) => (

                                                <div className="desktop-projectpage-gallery-image-tile" 
                                                    onClick={() => {
                                                        setViewImage(true)
                                                        setImageName(GalleryPath + '/' + gallery)
                                                    }}
                                                >
                                                    <img className="desktop-projectpage-gallery-image" src={ GalleryPath + '/' + gallery }/> 

                                                </div>

                                            ))
                                        }

                                    </div>

                                </div>

                            </div>

                            {
                                ViewImage &&
                                
                                <div className="desktop-projectpage-gallery-image-popup-modal">
                                    
                                    <div className="desktop-projectpage-gallery-image-popup-modal-close-button-container">

                                        <button className="desktop-projectpage-gallery-image-popup-modal-close-button" onClick={() => setViewImage(false)}>
                                            <span className="desktop-popus-close-icon" style={{"color": "#EAC435"}}>X</span>
                                        </button>

                                    </div>

                                    <div className="desktop-projectpage-gallery-image-popup-image-container">
                                        <img style={{"width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "20px"}} src={ ImageName }/>
                                    </div>

                                </div>
                            }

                        </div>
                    }

                </div>

            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 

export default ProjectPage;