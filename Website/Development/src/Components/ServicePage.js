import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './ServicePage.css';
import './main.css'

import HealthSafety from './Health_safety';
import Brochure from "../Data/GEC-Profile.pdf"

function ServicePage() {

    const [ConsultantCooperationService, setConsultantCooperationService] = useState(false)
    const [CivilWorkService, setCivilWorkService] = useState(false)
    const [ElectroMechService, setElectroMechService] = useState(false)
    const [SteelStructureService, setSteelStructureService] = useState(false)
    const [GreenBuildingService, setGreenBuildingService] = useState(false)
    const [HSEService, setHSEService] = useState(false)
    const [ElectricalLicense, setElectricalLicense] = useState(false)


    function DesktopComponent() {

        return(
            <>

                <div className="desktop-service-page-main-container" id="desktop-services-component">

                    <div className="desktop-header-container">
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "12.5%", "width": "12.5%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white"}}>
                                Our services
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div className="desktop-servicepage-content-main-container">

                        <div className="desktop-servicepage-content-inner-container">
  
                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Consultant Cooperation</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            We provide all kinds of construction consultancy services that can start off 
                                            your project right from the inception to it's most settled completion.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setConsultantCooperationService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/civilwork-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Civil Work</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation 
                                            including necessary authority approvals.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setCivilWorkService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Electrical and Mechanical Work</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            Bringing to you the best in class services in the area of electrical and mechanical works 
                                            the most needed for your project.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setElectroMechService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/steel-structure-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Steel Structure</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            Steel Structure Building services are the prime quality construction service that you can ensure in professional hands with us.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setSteelStructureService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/green-building-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Green Building</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            Constuction services that serves the increasing demands of technologies that can enhance 
                                            environmental sustainability.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setGreenBuildingService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/HSE-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Health and Safety</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            We ensure that the health and safety of our entire team is of utmost importance to maintain a sustainable environment that 
                                            evolves.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setHSEService(true)}>Know More</button>

                            </div>

                        </div>


    
                        
                    </div>

                </div>

                {
                    ConsultantCooperationService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setConsultantCooperationService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">
                                
                                <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Consultant Cooperation Services
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -175px"}} src={ process.env.PUBLIC_URL + "/images/consultancy-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            We stand up to be one of your premium team of consultants when it comes to absolute 
                                            support at all levels of your project. Starting from pre-planning, sheduling, 
                                            budgeting to execution and maintainence of your dream project. 
                                            <br /><br />
                                            Here's our areas of expertise when we provide service as professional construction
                                            consultants.
                                            <br /><br />
                                            <ul>
                                                <li>Project Planning</li>
                                                <li>Steel Structure Designing</li>
                                                <li>Budgeting</li>
                                                <li>Project Scheduling</li>
                                                <li>Project Management</li>
                                                <li>Project execution and construction consultation</li>
                                                <li>Maintenance and support</li>
                                            </ul>
                                            <br />
                                            We have always ensured that we have maintained supreme quality when it comes to 
                                            customer care consultancy and servicing which has resulted in the successful 
                                            associations and professional relationship that we have achieved throughout the 
                                            years of competence at what we do the best.
                                            <br /><br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                }

                {
                    CivilWorkService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setCivilWorkService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">

                                <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Civil Work Services
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -300px"}} src={ process.env.PUBLIC_URL + "/images/civil-work-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            We are competent when it comes to the refinement and consummation of 
                                            civil works as this is where we get to exhibhit our proficiency while unifying 
                                            customer expectations with service quality.
                                            <br /><br />
                                            Here's what we can do for you to have your project serviced in professional hands.
                                            <br /><br />
                                            <ul>
                                                <li>Steel Stucture Building Construction</li>
                                                <li>Pre Cast Building Construction</li>
                                                <li>Showrooms and Warehouses Construction</li>
                                                <li>Electrical and Mechanical Works</li>
                                                <li>Surveillance and Installations</li>
                                                <li>Government Approvals and Necessary Clearances</li>
                                            </ul>
                                            With expertise that comes from both skills and experience we can always ensure clean
                                            delivery of your requirments with our most efficient workers whome we manage with 
                                            great responsibility.
                                            <br /><br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                }

                {
                    ElectroMechService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setElectroMechService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">

                                <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Electrical and Mechanical Services
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -300px"}} src={ process.env.PUBLIC_URL + "/images/Electromechanical-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            Our project services package is only complete when we are able to provide you
                                            the best in class Electrical and Mechanical works that makes your building 
                                            functional and ready for commission. Understanding that this is one of the 
                                            critical part of your project, we always manage to secure and guarantee the 
                                            quality of the service that we bring to the table.
                                            <br /><br />
                                            Here's what we are able to cater to your requirements in the area of electrical 
                                            and mechanical services.
                                            <br /><br />
                                            <ul>
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                                <li>Item 5</li>
                                            </ul>
                                            <br /><br /><br /> 
                                        </p>

                                    </div>

                                    <div className="desktop-popup-service-content-electrical-gallery-container">


                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "cover.jpg" }
                                            />
                                        </div>
                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "1.jpg" }
                                            />
                                        </div>
                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "2.jpg" }
                                            />
                                        </div>
                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "3.jpg" }
                                            />
                                        </div>
                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "4.jpg" }
                                            />
                                        </div>
                                        <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "5.jpg" }
                                            />
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content-electrical-media-main-container">

                                        <div className="desktop-popup-service-content-electrical-media-video-container">
                        
                                            <iframe 
                                                className="desktop-popup-service-content-electrical-media-video"
                                                width="100%" 
                                                height="100%" 
                                                src="https://www.youtube.com/embed/CSV8GtV7M2U" 
                                                title="YouTube video player" frameborder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowfullscreen="true">
                                            </iframe>

                                        </div>

                                        <div className="desktop-popup-service-content-electrical-media-buttons-container">

                                            <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%", "text-align": "center"}}>
                                                Being experienced professionals, we are able to understand your requirements from 
                                                the objective level of the project while ensuring that you are compliant 
                                                to the concerned authorities.
                                            </p>

                                            <button className="desktop-popup-service-content-electrical-media-button" onClick={() => setElectricalLicense(true)} style={{"margin-top": "10%"}}>View License</button>

                                            <a href={Brochure} download="Gulf Erection Company - Electrical Service" className="desktop-popup-service-content-electrical-media-button" style={{"background": "#FF4343", "color": "white"}}>Download Electrical Service Brochure</a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {
                            ElectricalLicense && 

                            <div className="desktop-popup-modal">

                                <div className="desktop-popup-main-container">

                                    <div className="desktop-popup-close-button-container">
                                        <button className="desktop-popup-close-button" onClick={() => setElectricalLicense(false)}>
                                            <span className="desktop-popus-close-icon">X</span>
                                        </button>
                                    </div>

                                    <div className="desktop-popup-content-container">
                                        <div className="desktop-aboutus-badge-main-container">
                                            <div className="desktop-aboutus-certificate-container">
                                                <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/electrical-license.jpg" }  />
                                            </div>  
                                        </div>
                                    </div>
                                </div>

                            </div>

                        }

                    </div>

                }

                {
                    SteelStructureService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setSteelStructureService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">

                                <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Steel Structure Works
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -300px"}} src={ process.env.PUBLIC_URL + "/images/steel-structure-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            Steel Structure Buildings are one of our prime quality works that 
                                            we have in our service line. Being the most fundamental area of 
                                            you project or be it the complete requirement of work within your 
                                            project, Gulf Erection Company has always proven to be the best 
                                            among this competent space that is quite evident from the projects 
                                            that we have completed so far.
                                            <br /><br />
                                            Here's our complete end to end service when it comes to steel structure 
                                            building projects.
                                            <br /><br />
                                            <ul>
                                                <li>Steel Structure Project Consultancy</li>
                                                <li>Steel Structure Building Design</li>
                                                <li>Steel Structure Authority Approvals</li>
                                                <li>Steel Structure Material Procurement</li>
                                                <li>Steel Strcuture building construction.</li>
                                            </ul>
                                            <br />
                                            Have your project handled by us, to make sure that you have your projects 
                                            completed with non compromising effort and quality.
                                            <br /><br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                }

                {
                    GreenBuildingService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setGreenBuildingService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">

                                <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Green Building Services
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -300px"}} src={ process.env.PUBLIC_URL + "/images/green-building-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            Keeping up with the demands of our environment and technological 
                                            advancements, we are capable of contributing to the green development 
                                            mission. We aim to use technologies that enhance performance, 
                                            durability, aesthetics and sustainable solutions to your green requirements
                                            of the project.
                                            <br /><br />

                                            These are the areas of expertise that we can enhance your sustainable 
                                            concept of your project.
                                            <br /><br />

                                            <ul>
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                                <li>Item 5</li>
                                            </ul>

                                            <br />
                                            With continuous improvements and advancements in our methods of constructions 
                                            we will be able to refine the efficiency to achieve the goal of development that 
                                            should be as environment friendly as it could look visually appealing while ensuring 
                                            structual and functional robustness.
                                            <br /><br /><br />
                                        </p>

                                        <div className="desktop-popup-service-content-electrical-gallery-container">

                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "cover.jpg" }
                                                />
                                            </div>
                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "1.jpg" }
                                                />
                                            </div>
                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "2.jpg" }
                                                />
                                            </div>
                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "3.jpg" }
                                                />
                                            </div>
                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "4.jpg" }
                                                />
                                            </div>
                                            <div className="desktop-popup-service-content-electrical-gallery-tiles">
                                                <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                    src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "5.jpg" }
                                                />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                }

                {
                    HSEService && 

                    <div className="desktop-popup-modal">

                        <div className="desktop-popup-main-container">

                            <div className="desktop-popup-close-button-container">
                                <button className="desktop-popup-close-button" onClick={() => setHSEService(false)}>
                                    <span className="desktop-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="desktop-popup-content-container">

                                <div className="desktop-popup-header-container" style={{"width": "60%"}}>
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                        <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                            Health, Safety and Environment Services
                                        </h1>
                                    </div>

                                    <div className="desktop-popup-header-line"/>

                                </div>

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "0px -300px"}} src={ process.env.PUBLIC_URL + "/images/HSE-service-image.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"height": "400px"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "4%", "font-size": "120%"}}>
                                            Occupational Health and Safety is the most imortant when it comes to 
                                            a sustainable and credible delivery of work that defined the values 
                                            that we stand up for. Our aim is to reduce the risk within the "high-risk" 
                                            industry that our services are often referred to as. 
                                            <br /><br />
                                            We ensure that our workers and our environment is safe as we are experienced 
                                            and have managed the impact of the forecasted dangers by ensuring that we 
                                            are compliant to the health, safety and environment regulations and rules  
                                            of our country. 
                                            <br /><br />
                                            Here's an overview of our practices that we ensure before we start off 
                                            with the work.
                                            <br /><br />
                                            <ul>
                                                <li>Identify and devise risks and their appropriate management plan</li>
                                                <li>Ensure manadatory trainings that are specific to the site and job</li>
                                                <li>Ensuring the workers have abundant access to the safety equipements and absolute proficiency and knowledge to use them</li>
                                                <li>Making sure that all health,safety and environment related management plans are followed day to day regardless of any priority of works involved.</li>
                                            </ul>
                                            <br />
                                            Here at Gulf Erection Constrctions, we realise understanding the primary causes 
                                            of the risks and dangers is the key to start with. This is why we are professionals 
                                            with effective management of activities and competent site supervision.
                                            <br />
                                        </p>

                                        <HealthSafety/>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                }

            </>
        );
} 

function MobileComponent() {
    

    return(
        <>
            <div className="mobile-service-page-main-container" id="mobile-services-component">

                <div className="mobile-header-container" style={{"margin-top": "10%", "width": "55%"}}>
                    
                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                        <img style={{"height": "50%", "width": "15%", "margin-top": "-7%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                        
                        <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white"}}>
                            Our Service
                        </h3>
                    </div>

                    <div className="mobile-header-line" style={{"margin-top": "2%"}} />

                </div>

                <div className="mobile-servicepage-content-main-container">

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Consultant Cooperation</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    We provide all kinds of construction consultancy services that can start off 
                                    your project right from the inception to it's most settled completion.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setConsultantCooperationService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/civilwork-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Civil Work</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation 
                                    including necessary authority approvals.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setCivilWorkService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Electrical and Mechanical Workl Work</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    Bringing to you the best in class services in the area of electrical and mechanical works 
                                    the most needed for your project.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setElectroMechService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/steel-structure-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Steel Structure</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    Steel Structure Building services are the prime quality construction service that you can ensure in professional hands with us.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setSteelStructureService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/green-building-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Green Building</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    Constuction services that serves the increasing demands of technologies that can enhance 
                                    environmental sustainability.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setGreenBuildingService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards" style={{"margin-bottom": "10%"}}>

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/HSE-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Health and Safety</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    We ensure that the health and safety of our entire team is of utmost importance to maintain a sustainable environment that 
                                    evolves.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setHSEService(true)}>Know More</button>

                    </div>

                </div>

            </div>

            {
                ConsultantCooperationService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setConsultantCooperationService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Consultancy Cooperation Services
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/consultancy-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            We stand up to be one of your premium team of consultants when it comes to absolute 
                                            support at all levels of your project. Starting from pre-planning, sheduling, 
                                            budgeting to execution and maintainence of your dream project. 
                                            <br /><br />
                                            Here's our areas of expertise when we provide service as professional construction
                                            consultants.
                                            <br /><br />
                                            <ul>
                                                <li>Project Planning</li>
                                                <li>Steel Structure Designing</li>
                                                <li>Budgeting</li>
                                                <li>Project Scheduling</li>
                                                <li>Project Management</li>
                                                <li>Project execution and construction consultation</li>
                                                <li>Maintenance and support</li>
                                            </ul>
                                            <br />
                                            We have always ensured that we have maintained supreme quality when it comes to 
                                            customer care consultancy and servicing which has resulted in the successful 
                                            associations and professional relationship that we have achieved throughout the 
                                            years of competence at what we do the best.
                                            <br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            }

            {
                CivilWorkService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setCivilWorkService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Civil Work Services
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/civil-work-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            We are competent when it comes to the refinement and consummation of 
                                            civil works as this is where we get to exhibhit our proficiency while unifying 
                                            customer expectations with service quality.
                                            <br /><br />
                                            Here's what we can do for you to have your project serviced in professional hands.
                                            <br /><br />
                                            <ul>
                                                <li>Steel Stucture Building Construction</li>
                                                <li>Pre Cast Building Construction</li>
                                                <li>Showrooms and Warehouses Construction</li>
                                                <li>Electrical and Mechanical Works</li>
                                                <li>Surveillance and Installations</li>
                                                <li>Government Approvals and Necessary Clearances</li>
                                            </ul>
                                            <br />
                                            With expertise that comes from both skills and experience we can always ensure clean
                                            delivery of your requirments with our most efficient workers whome we manage with 
                                            great responsibility.
                                            <br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

                </div>

            }

            {
                ElectroMechService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setElectroMechService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Electrical and Mechanical Services
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/Electromechanical-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Our project services package is only complete when we are able to provide you
                                            the best in class Electrical and Mechanical works that makes your building 
                                            functional and ready for commission. Understanding that this is one of the 
                                            critical part of your project, we always manage to secure and guarantee the 
                                            quality of the service that we bring to the table.
                                            <br /><br />
                                            Here's what we are able to cater to your requirements in the area of electrical 
                                            and mechanical services.
                                            <br /><br />
                                            <ul>
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                                <li>Item 5</li>
                                            </ul>
                                            <br />
                                            Being experienced professionals, we are able to understand your requirements from 
                                            the objective level of the project while ensuring that you are compliant 
                                            to the concerned authorities.
                                            <br /><br />
                                        </p>

                                    </div>

                                    <div className="desktop-popup-service-content-electrical-gallery-container">

                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "cover.jpg" }
                                            />
                                        </div>
                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "1.jpg" }
                                            />
                                        </div>
                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "2.jpg" }
                                            />
                                        </div>
                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "3.jpg" }
                                            />
                                        </div>
                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "4.jpg" }
                                            />
                                        </div>
                                        <div className="mobile-popup-service-content-electrical-gallery-tiles">
                                            <img className="desktop-popup-service-content-electrical-gallery-tiles-image" 
                                                src={ process.env.PUBLIC_URL + "/Data/Project-Gallery/electrical-work/" + "5.jpg" }
                                            />
                                        </div>

                                    </div>

                                    <div className="mobile-popup-service-content-electrical-media-main-container">

                                        <div className="mobile-popup-service-content-electrical-media-video-container">
                        
                                            <iframe 
                                                className="desktop-popup-service-content-electrical-media-video"
                                                width="100%" 
                                                height="100%" 
                                                src="https://www.youtube.com/embed/CSV8GtV7M2U" 
                                                title="YouTube video player" frameborder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowfullscreen="true">
                                            </iframe>

                                        </div>

                                        <div className="mobile-popup-service-content-electrical-media-buttons-container">

                                            <p className="desktop-content-style" style={{"font-size": "120%", "text-align": "center"}}>
                                                Being experienced professionals, we are able to understand your requirements from 
                                                the objective level of the project while ensuring that you are compliant 
                                                to the concerned authorities.
                                            </p>

                                            <button className="mobile-popup-service-content-electrical-media-button" onClick={() => setElectricalLicense(true)} style={{"margin-top": "10%"}}>View License</button>

                                            <a href={Brochure} download="Gulf Erection Company - Electrical Service" className="mobile-popup-service-content-electrical-media-button" style={{"background": "#FF4343", "color": "white"}}>Download Electrical Service Brochure</a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

                    {
                        ElectricalLicense && 

                        <div className="mobile-popup-modal" style={{"height": "auto", "align-items": "center"}}>

                            <div className="mobile-popup-main-container" style={{"height": "auto", "border-radius": "20px"}}>

                                <div className="mobile-popup-close-button-container">
                                    <button className="mobile-popup-close-button" onClick={() => setElectricalLicense(false)}>
                                        <span className="mobile-popus-close-icon">X</span>
                                    </button>
                                </div>

                                <div className="mobile-aboutus-popup-content-container" style={{"margin-bottom": "15%"}}>
                                    <div className="desktop-aboutus-badge-main-container">
                                        <div className="mobile-aboutus-certificate-container">
                                            <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/electrical-license.jpg" }  />
                                        </div>  
                                    </div>
                                </div>
                            </div>

                        </div>

                    }

                </div>

            }

            {
                SteelStructureService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setSteelStructureService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Steel Structure Works
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/steel-structure-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Steel Structure Buildings are one of our prime quality works that 
                                            we have in our service line. Being the most fundamental area of 
                                            you project or be it the complete requirement of work within your 
                                            project, Gulf Erection Company has always proven to be the best 
                                            among this competent space that is quite evident from the projects 
                                            that we have completed so far.
                                            <br /><br />
                                            Here's our complete end to end service when it comes to steel structure 
                                            building projects.
                                            <br /><br />
                                            <ul>
                                                <li>Steel Structure Project Consultancy</li>
                                                <li>Steel Structure Building Design</li>
                                                <li>Steel Structure Authority Approvals</li>
                                                <li>Steel Structure Material Procurement</li>
                                                <li>Steel Strcuture building construction.</li>
                                            </ul>
                                            <br />
                                            Have your project handled by us, to make sure that you have your projects 
                                            completed with non compromising effort and quality.
                                            <br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

                </div>

            }

            {
                GreenBuildingService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setGreenBuildingService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Green Building Services
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/green-building-service-image-main.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Keeping up with the demands of our environment and technological 
                                            advancements, we are capable of contributing to the green development 
                                            mission. We aim to use technologies that enhance performance, 
                                            durability, aesthetics and sustainable solutions to your green requirements
                                            of the project.
                                            <br /><br />

                                            These are the areas of expertise that we can enhance your sustainable 
                                            concept of your project.
                                            <br /><br />

                                            <ul>
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                                <li>Item 5</li>
                                            </ul>

                                            <br />
                                            With continuous improvements and advancements in our methods of constructions 
                                            we will be able to refine the efficiency to achieve the goal of development that 
                                            should be as environment friendly as it could look visually appealing while ensuring 
                                            structual and functional robustness.
                                            <br /><br />
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

                </div>

            }

            {
                HSEService && 

                <div className="mobile-popup-modal">

                    <div className="mobile-popup-main-container">

                        <div className="mobile-popup-close-button-container">
                            <button className="mobile-popup-close-button" onClick={() => setHSEService(false)}>
                                <span className="mobile-popus-close-icon">X</span>
                            </button>
                        </div>

                        <div className="mobile-aboutus-popup-content-container">
                            
                            <div className="mobile-popup-header-container" style={{"width": "90%"}}>
                                
                                <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                    <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                                    
                                    <h4 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                        Health, Safety and Environment Services
                                    </h4>

                                </div>

                                <div className="mobile-popup-header-line" style={{"width": "60%"}}/>

                            </div>

                            <div className="mobile-service-popup-content-main-container">

                                <div className="desktop-popup-service-main-content-container">

                                    <div className="desktop-popup-service-content" style={{"height": "300px"}}>

                                        <div className="desktop-popup-service-main-image-container">
                                            <img style={{"height": "100%", "width": "100%", "object-fit": "cover", "border-radius": "20px", "object-position": "-75px 0px"}} src={ process.env.PUBLIC_URL + "/images/HSE-service-image.jpg" }/>
                                        </div>

                                    </div>

                                    <div className="desktop-popup-service-content" style={{"width": "87.5%"}}>

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Occupational Health and Safety is the most imortant when it comes to 
                                            a sustainable and credible delivery of work that defined the values 
                                            that we stand up for. Our aim is to reduce the risk within the "high-risk" 
                                            industry that our services are often referred to as. 
                                            <br /><br />
                                            We ensure that our workers and our environment is safe as we are experienced 
                                            and have managed the impact of the forecasted dangers by ensuring that we 
                                            are compliant to the health, safety and environment regulations and rules  
                                            of our country. 
                                            <br /><br />
                                            Here's an overview of our practices that we ensure before we start off 
                                            with the work.
                                            <br /><br />
                                            <ul>
                                                <li>Identify and devise risks and their appropriate management plan</li>
                                                <li>Ensure manadatory trainings that are specific to the site and job</li>
                                                <li>Ensuring the workers have abundant access to the safety equipements and absolute proficiency and knowledge to use them</li>
                                                <li>Making sure that all health,safety and environment related management plans are followed day to day regardless of any priority of works involved.</li>
                                            </ul>
                                            <br />
                                            Here at Gulf Erection Constrctions, we realise understanding the primary causes 
                                            of the risks and dangers is the key to start with. This is why we are professionals 
                                            with effective management of activities and competent site supervision.
                                            <br /><br />
                                        </p>

                                        <HealthSafety/>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

                </div>

            }

        </>
    );
} 
const width = window.innerWidth;
const breakpoint = 500;

return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}
export default ServicePage;