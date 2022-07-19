import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import NavigationBarComponent from "./NavigationBarComponent";
import ImageCorousal from "./ImageCorousal";
import FooterComponent from "./FooterComponent";
import './HomePage.css';

import ProjectData from "./ProjectDetails.json";

function HomePage() {

    return(
        <>
            <NavigationBarComponent/>
            <ImageCorousal />
            <div className="homepage-main-container">
                
                <div style={{"display": "flex", "flex-direction": "row", "justifyContent": "center", "alignItems": "center", "margin": "2%"}}>
                    <img style={{"height": "40%", "width": "40%"}} src="/images/Image1.png" />
                    <div className="homepage-quote-request-main-container" >
                        <img style={{"height": "70%", "width": "50%"}} src="/images/request-icon.png" />
                        <p style={{"textAlign": "center", "margin-top": "5%", "color": "gray"}}>Looking for a quality and affordable constructor for your next project?</p>
                        <p style={{"textAlign": "center"}} ><a href="#" style={{"textAlign": "center", "color": "red"}}>Request Quote Now !</a></p>
                    </div>
                </div>
                <h1 style={{"font-weight": "normal"}}>We do the Perfect work for you</h1>
                <p>Gulf Erection Co. has undergone an abrupt growth and proved, successfully, that its one of the leading construction companies, steel erection specialist, and pre-engineered building erector in the Emirate of Abu Dhabi and Al Ain.</p>
                
                <div className="homepage-service-header">
                    <h5>OUR SERVICES</h5>
                    <div className="homepage-service-header-line"></div>
                </div>
                <div className="homepage-services-container">

                    <div className="homepage-services-items">
                        <img style={{"height": "50%", "width": "65%", "filter": "drop-shadow(5px 5px 10px #000)"}} src="/images/service-image-a.png" />
                        <h3 style={{"margin-top": "5%"}}>Design and Build Package</h3>
                        <p style={{"margin-left": "5%", "margin-right": "5%", "textAlign": "center"}}>We strive for well-detailed and technologically innovative design with an artistic expression that will stand the test of time.</p>
                    </div>

                    <div className="homepage-services-items">
                        <img style={{"height": "50%", "width": "65%", "filter": "drop-shadow(5px 5px 10px #000)", "margin-bottom": "6%"}} src="/images/service-image-b.png" />
                        <h3 style={{"margin-top": "5%"}}>Building Renovation</h3>
                        <p style={{"margin-left": "5%", "margin-right": "5%", "textAlign": "center"}}>Depending on the scope of your project, we design your renovation in-house or partner with Builder ‘s finest architects to design, budget and build.</p>
                    </div>

                    <div className="homepage-services-items">
                        <img style={{"height": "50%", "width": "65%", "filter": "drop-shadow(5px 5px 10px #000)"}} src="/images/service-image-c.png" />
                        <h3 style={{"margin-top": "5%"}}>Project Management</h3>
                        <p style={{"margin-left": "5%", "margin-right": "5%", "textAlign": "center"}}>With 20 plus years in the Building Industry we have the knowledge for various building projects.</p>
                    </div>

                </div>

                <div className="homepage-service-header">
                    <h5>RECENT PROJECTS</h5>
                    <div className="homepage-service-header-line"></div>
                </div>

                <div className="homepage-project-container">

                    {
                        ProjectData.map((project) => (
                            <div className="homepage-project-items" >
                                <img className="homepage-project-item-image" src={project.ProjectImage} />
                                <h2 style={{"margin-top": "5%"}}>{project.ProjectName}</h2>
                                <div style={{"background-color": "gray", "height": "1px", "width": "60%", "margin-top": "5%"}}></div>
                            </div>
                        ))
                    }

                </div>

            </div>

            <div className="hompage-banner-container">
                
                <div className="homepage-banner-container-left">
                    <h1 style={{"font-weight": "normal", "font-size": "25px", "margin": "10%"}}>LOOKING FOR A QUALITY AND AFFORDABLE CONSTRUCTOR FOR YOUR <span style={{"font-weight": "bold"}}>NEXT PROJECT?</span></h1>
                </div>

                <div className="homepage-banner-container-right">

                    <div className="homepage-banner-right-header">
                        <h5>REQUEST A QUOTE</h5>
                        <div className="homepage-banner-right-header-line" ></div>
                    </div>

                </div>
            </div>

            <FooterComponent/>
        </>
    );
}

export default HomePage;