import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './ServicePage.css';
import './main.css'

function ServicePage() {

    const [ConsultantCooperationService, setConsultantCooperationService] = useState(false)
    const [CivilWorkService, setCivilWorkService] = useState(false)
    const [ElectroMechService, setElectroMechService] = useState(false)
    const [SteelStructureService, setSteelStructureService] = useState(false)
    const [GreenBuildingService, setGreenBuildingService] = useState(false)
    const [HSEService, setHSEService] = useState(false)

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
                                            your project right from the inception to it's most appropriate completion.
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
                                                We are experienced and proficient with the civil works that your 
                                                project needs.
                                        </p>
                                </div>

                                <button className="desktop-servicepage-card-button" onClick={() => setCivilWorkService(true)}>Know More</button>

                            </div>

                            <div className="desktop-servicepage-content-cards">

                                <div className="desktop-servicepage-card-img" >
                                    <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                                </div>

                                <h1 className="desktop-servicepage-card-header">Electromechanical Work</h1>

                                <div className="desktop-servicepage-card-text">
                                        <p className="desktop-servicepage-card-text">
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                            Electromechanical Project Services
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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Electromechanical Project Service Description
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Steel Structure Works Description
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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Green Building Description
                                        </p>

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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Health, Safety and Environment Services Description
                                        </p>

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
                                    your project right from the inception to it's most appropriate completion.
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
                                    We are experienced and proficient with the civil works that your 
                                    project needs.
                                </p>
                        </div>

                        <button className="mobile-servicepage-card-button" onClick={() => setCivilWorkService(true)}>Know More</button>

                    </div>

                    <div className="mobile-servicepage-content-cards">

                        <div className="mobile-servicepage-card-img" >
                            <img style={{"height": "100%", "width": "30%"}} src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                        </div>

                        <h1 className="mobile-servicepage-card-header">Electromechanical Work</h1>

                        <div className="mobile-servicepage-card-text">
                                <p className="mobile-servicepage-card-text">
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                        Electromechanical Project Services
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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Electromechanical Project Service Description
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        
                    </div>

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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Steel Structure Works Description
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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Green Building Description
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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Health, Safety and Environment Services Description
                                        </p>

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