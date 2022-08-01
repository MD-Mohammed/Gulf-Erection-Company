import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ProjectPage.css'

function ProjectPage() {

    function DesktopComponent() {


    return(
        <>

           <div className="ProjectPage-desk-main-container">
                <div className="ProjectPage-desk-container-Heading" style={{"flex":1,"flexDirection":"column"}}>
                        
                        <div style={{"display":"flex"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5px","color":"white"}}>
                            PROJECTS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                        
                    </div>
            <div className="ProjectPage-desk-container-ProjectCard">
                
                <div className="ProjectPage-Desk-Project-Card-prop">
                   
                    <div style={{"height":"80%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-Desk-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-desk-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                
                
                
            </div>

           </div>

        </>
    );
} 

function MobileComponent() {


    return(
        <>

<div className="ProjectPage-mobile-main-container">
                <div className="ProjectPage-mobile-container-Heading" style={{"flex":1,"flexDirection":"column"}}>
                        
                        <div style={{"display":"flex"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5px","color":"white"}}>
                            PROJECTS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                        
                    </div>
            <div className="ProjectPage-mobile-container-ProjectCard">
                
                <div className="ProjectPage-mobile-Project-Card-prop">
                   
                    <div style={{"height":"80%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-desk-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
                </div>
                <div className="ProjectPage-mobile-Project-Card-prop">
                  
                    <div style={{"height":"80%","width":"100%"}}>
                    <img className="ProjectPage-mobile-card-img-prop" src={ process.env.PUBLIC_URL + "/images/project-image-e.jpg" }/>
                    
                    </div>
                    <div style={{ "height":"20%"}} className="ProjectPage-mobile-card-text">
                        <p>World’s Largest Mercedes Benz Showroom <br />2007
                        </p>
                    </div>
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
export default ProjectPage;