import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ServicePage.css';
import './main.css'

function ServicePage() {

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
export default ServicePage;