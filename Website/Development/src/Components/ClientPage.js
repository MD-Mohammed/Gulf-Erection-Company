import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ClientPage.css';

function ClientPage() {

    function DesktopComponent() {


    return(
            <>
            <div className="ClientPage-desk-Main-container">
                
                <div style={{"height":"10%"}}className="ClientPage-mobile-container">
                    
                     <div style={{"display":"flex"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5px","color":"white"}}>
                            SUCCESSFUL ASSOCIATIONS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                </div>
                <div style={{"height":"80%"}} className="ClientPage-desk-Main-container">
                    <div className="ClientPage-desk-image-card-prop">
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    <img className="ClientPage-desk-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    
                    </div>
                </div>


            </div>
            </>
    );
    
} 

function MobileComponent() {


    return(
        <>

<div className="ClientPage-mobile-Main-container">
                
                <div style={{"height":"10%"}}className="ClientPage-mobile-container">
                    
                     <div style={{"display":"flex","AlignContent":"center"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5%","color":"white","fontSize":"20px"}}>
                            SUCCESSFUL ASSOCIATIONS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                </div>
                <div style={{"height":"80%"}} className="ClientPage-mobile-container">
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
                    </div>
                    <div className="ClientPage-mobile-image-card-prop">
                    <img className="ClientPage-mobile-image-prop" src={ process.env.PUBLIC_URL + "/images/client-image.png" }/>
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
export default ClientPage;