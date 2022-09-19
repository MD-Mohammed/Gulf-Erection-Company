import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ClientPage.css';
import { motion } from "framer-motion"
import { useState, useEffect,useRef} from "react"
import ClientLogos from "../Data/Client-Logos/Client.js"

function ClientPage() {

    const [corouselwidth, setCorouselWidth]=useState(0);
    const corousel=useRef();

    // useEffect(() =>{
    //     setCorouselWidth(corousel.current.scrollWidth - corousel.current.offsetWidth);
    // }, []);

    function DesktopComponent() {
       
        return(
            <>

                {/* <div className="desktop-clientpage-main-container" id="desktop-clients-component">

                    <div className="desktop-header-container" style={{"width": "35%"}}>
                    
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "59%", "width": "8%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white"}}>
                                Successful Associations
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div className="desktop-clientpage-slider-main-container">

                        <div className="desktop-clientpage-slider-container">
                            
                            <motion.div ref={corousel}className="desktop-clientpage-slider-frame">
                                <motion.div drag ="x" dragConstraints ={{right:0,left: -corouselwidth}} style={{"display": "flex"}}>
                                    {
                                        ClientLogos.map(image => {
                                            return(
                                                <motion.div className="desktop-clientpage-icon-frame" key={image}> 
                                                    <img className="desktop-clientpage-icon" src={image} alt ="" />
                                                </motion.div>
                                            );
                                        })
                                    }
                                </motion.div>
                            </motion.div>

                        </div>

                    </div>
                    
                </div> */}

                <div className="desktop-clientpage-scroller-main-container" id="desktop-clients-component">

                    <div className="desktop-header-container" style={{"width": "35%", "margin-top": "0%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "59%", "width": "8%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white"}}>
                                Successful Associations
                            </h1>
                        </div>

                        <div className="desktop-header-line" />

                    </div>

                    <div style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>

                        <div className="desktop-clientpage-scroller-track-container">
                            
                                <div className="desktop-clientpage-scroller-track">

                                    {
                                        ClientLogos.map(image => {
                                            return(
                                                <div className="desktop-clientpage-image-tiles" >
                                                    <img className="desktop-clientpage-scroller-logos" src={image} alt ="" />
                                                </div>
                                            );
                                        })
                                    }

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
                {/* <div className="mobile-clientpage-main-container" id="mobile-clients-component">

                    <div className="mobile-header-container" style={{"margin-top": "10%", "width": "90%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{ "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white", "margin-left": "-2%"}}>
                            Successful Associations
                            </h3>
                        </div>

                        <div className="mobile-header-line" style={{"margin-top": "2%"}} />

                    </div>

                    <div className="mobile-clientpage-slider-main-container">

                        <div className="mobile-clientpage-slider-container">
                            
                            <motion.div ref={corousel}className="mobile-clientpage-slider-frame">
                                <motion.div drag ="x" dragConstraints ={{right:0,left: -corouselwidth}} style={{"display": "flex"}}>
                                    {
                                        ClientLogos.map(image => {
                                            return(
                                                <motion.div className="mobile-clientpage-icon-frame" key={image}> 
                                                    <img className="mobile-clientpage-icon" src={image} alt ="" />
                                                </motion.div>
                                            );
                                        })
                                    }
                                </motion.div>
                            </motion.div>

                        </div>

                    </div>

                </div> */}

                <div className="mobile-clientpage-scroller-main-container" id="mobile-clients-component">
                    
                    <div className="mobile-header-container" style={{"margin-top": "0%", "width": "90%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%", "margin-top": "10%"}}>  
                            <img style={{ "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white", "margin-left": "-2%"}}>
                                Our Clients
                            </h3>
                        </div>

                        <div className="mobile-header-line" style={{"margin-top": "2%"}} />

                    </div>

                    <div style={{"display": "flex", "justify-content": "center", "align-items": "center", "margin-top": "10%"}}>

                        <div className="desktop-clientpage-scroller-track-container" style={{"width": "90%", "height": "300px"}}>
                            
                                <div className="desktop-clientpage-scroller-track" style={{"gap": "0.75%"}}>

                                    {
                                        ClientLogos.map(image => {
                                            return(
                                                <div className="desktop-clientpage-image-tiles" style={{"width": "200px"}}>
                                                    <img className="desktop-clientpage-scroller-logos" src={image} alt ="" />
                                                </div>
                                            );
                                        })
                                    }

                                </div>

                        </div>

                    </div>

                    <div style={{"height": "50px"}}/>

                </div>

            </>
        );
    }

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}

export default ClientPage;