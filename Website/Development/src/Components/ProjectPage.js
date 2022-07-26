import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import NavigationBarComponent from "./NavigationBarComponent";
import FooterComponent from "./FooterComponent";
import './ProjectPage.css';
import ProjectData from "../Data/ProjectDetails.json";




function ProjectPage() {

    return(
        <>
            <NavigationBarComponent/>
            <div className="ProjectPage-main-Container">
                <div className="ProjectPage-container">
                    <div className="ProjectPage-main-header" >
                        <h1 style={{"textAlign":"center","color":"white","fontSize":"70px"}}>
                            PROJECT
                        </h1>
                    </div>
                    <div className="ProjectPage-main-header">
                        <p style={{"textAlign": "center"}} >
                            <a href="#" style={{"textAlign":"center","color":"white","fontSize":"35px"}}>Brochure
                            </a>
                        </p>
                    </div> 
                </div>
                <div>
                <div>
                    
                </div>
                <div style={{"backgroundColor":"white","marginLeft":"50px","marginRight":"50px"}}>
                    <div >

                    </div>
                    
                        
                {
                        ProjectData.map((project) => (
                            <div className="ProjectPage-project-items" style={{"marginTop":"5%"}}  >
                                <img className="ProjectPage-project-item-image" src={project.ProjectImage} />
                                <h2 style={{"margin-top": "5%"}}>{project.ProjectName}</h2>
                                <div style={{"background-color": "gray", "height": "1px", "width": "60%", "margin-top": "5%"}}></div>
                            </div>
                        ))
                    }



                    </div> 
                </div>
            </div>

            <FooterComponent/>
        </>
    );
}

export default ProjectPage;