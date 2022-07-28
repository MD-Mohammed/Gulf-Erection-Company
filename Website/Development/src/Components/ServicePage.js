import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ServicePage.css'

function ServicePage() {
    function DesktopComponent() {


    return(
        <>

            <div className="ServicePage-desk-container">
                <div className="ServicePage-desk-main-container" style={{"flex":1,"flexDirection":"column"}}>
                    
                    <div style={{"display":"flex"}}>  
                        <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                        
                        <h1 style={{"marginLeft":"20px","marginTop":"5px"}}>
                        SERVICES
                        </h1>
                     </div>
                     <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                     </div>
                    
                </div>

                <div className="ServicePage-desk-services-container" style={{"flex":8}}>


                   {/* Container block for each cards  starts*/}
                    <div className="ServicePage-desk-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-desk-services-img" src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-desk-services-text-H3">Consultant Cooperation</h3>
                         </div>
                         <div className="ServicePage-desk-services-text" style={{"flex":3}}>
                                <p className="ServicePage-desk-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>
                    {/* Container block for each cards  ends*/}
                    <div className="ServicePage-desk-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-desk-services-img" src={ process.env.PUBLIC_URL + "/images/civilwork-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-desk-services-text-H3" >Civil Work</h3>
                         </div>
                         <div className="ServicePage-desk-services-text" style={{"flex":3}}>
                                <p className="ServicePage-desk-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-desk-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-desk-services-img" src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-desk-services-text-H3" >Electromechanical Work</h3>
                         </div>
                         <div className="ServicePage-desk-services-text" style={{"flex":3}}>
                                <p className="ServicePage-desk-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-desk-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-desk-services-img" src={ process.env.PUBLIC_URL + "/images/steel-structure-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-desk-services-text-H3" >Steel Structure Work</h3>
                         </div>
                         <div className="ServicePage-desk-services-text" style={{"flex":3}}>
                                <p className="ServicePage-desk-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-desk-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-desk-services-img" src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-desk-services-text-H3" >Green Building</h3>
                         </div>
                         <div className="ServicePage-desk-services-text" style={{"flex":3}}>
                                <p className="ServicePage-desk-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
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
            <div className="ServicePage-Mobile-container">
                <div style={{"height":"10%"}}>
                    <div className="ServicePage-mobile-main-container" style={{"flex":1,"flexDirection":"column"}}>
                    
                    <div style={{"display":"flex"}}>  
                        <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/service-icon.png" }/>
                        
                        <h1 style={{"marginLeft":"20px","marginTop":"5px"}}>
                        SERVICES
                        </h1>
                     </div>
                     <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                     </div>
                    
                </div>
                </div>
                <div style={{"height":"90%"}}>
                    
                    <div className="ServicePage-mobile-services-container" style={{"flex":8}}>


                   {/* Container block for each cards  starts*/}
                    <div className="ServicePage-mobile-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-mobile-services-img" src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-mobile-services-text-H3">Consultant Cooperation</h3>
                         </div>
                         <div className="ServicePage-mobile-services-text" style={{"flex":3}}>
                                <p className="ServicePage-mobile-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>
                    {/* Container block for each cards  ends*/}
                    <div className="ServicePage-mobile-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-mobile-services-img" src={ process.env.PUBLIC_URL + "/images/civilwork-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-mobile-services-text-H3" >Civil Work</h3>
                         </div>
                         <div className="ServicePage-mobile-services-text" style={{"flex":3}}>
                                <p className="ServicePage-mobile-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-mobile-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-mobile-services-img" src={ process.env.PUBLIC_URL + "/images/mep-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-mobile-services-text-H3">Electromechanical Work</h3>
                         </div>
                         <div className="ServicePage-mobile-services-text" style={{"flex":3}}>
                                <p className="ServicePage-mobile-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-mobile-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-mobile-services-img" src={ process.env.PUBLIC_URL + "/images/steel-structure-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-mobile-services-text-H3" >Steel Structure Work</h3>
                         </div>
                         <div className="ServicePage-mobile-services-text" style={{"flex":3}}>
                                <p className="ServicePage-mobile-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
                    </div>

                    <div className="ServicePage-mobile-services-container-blocks">
                         <div style={{"display":"flex","flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <img className="ServicePage-mobile-services-img" src={ process.env.PUBLIC_URL + "/images/consultancy-service-icon.png" }/>
                         </div>
                         <div style={{"flex":0.5}}>
                             <h3 className="ServicePage-mobile-services-text-H3" >Green Building</h3>
                         </div>
                         <div className="ServicePage-mobile-services-text" style={{"flex":3}}>
                                <p className="ServicePage-mobile-services-text">
                                Providing turnkey services right from the inception stage including drawings, designs & estimation including necessary authority approvals.
                                </p>

                         </div>
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