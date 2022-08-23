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
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                            Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Consultant Cooperation Services Description
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

                                        <p className="desktop-content-style" style={{"margin-top": "4%"}}>
                                            Civil Work Service Description
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
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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
                                    Providing turnkey services right from the inception stage including drawings, designs and estimation including necessary authority approvals.
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

                    <div className="mobile-servicepage-content-cards" style={{"margin-bottom": "10%"}}>

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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Consultant Cooperation Services Description
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

                                    <div className="desktop-popup-service-content">

                                        <p className="desktop-content-style" style={{"margin-top": "10%"}}>
                                            Civil Work Service Description
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

        </>
    );
} 
const width = window.innerWidth;
const breakpoint = 500;

return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}
export default ServicePage;