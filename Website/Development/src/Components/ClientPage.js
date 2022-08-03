import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './ClientPage.css';
import { motion } from "framer-motion"
import { useState, useEffect,useRef} from "react"
import images from "./Client_Images"

function ClientPage() {

    const [corouselwidth, setCorouselWidth]=useState(0);
    const corousel=useRef();

    useEffect(() =>{
        setCorouselWidth(corousel.current.scrollWidth - corousel.current.offsetWidth);
    }, []);

    function DesktopComponent() {
       
        return(
            <>

                <div className="desktop-clientpage-main-container">

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
                                        images.map(image => {
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
                    
                </div>
            </>
        );
            
    } 

function MobileComponent() {


    return(
            <>
                <div className="mobile-clientpage-main-container">

                    <div className="mobile-header-container" style={{"margin-top": "10%", "width": "100%"}}>
                        
                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                            <img style={{"height": "60%", "width": "8%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "color": "white"}}>
                                Our Clients
                            </h3>
                        </div>

                        <div className="mobile-header-line" style={{"margin-top": "2%"}} />

                    </div>

                    <div className="mobile-clientpage-slider-main-container">

                        <div className="mobile-clientpage-slider-container">
                            
                            <motion.div ref={corousel}className="mobile-clientpage-slider-frame">
                                <motion.div drag ="x" dragConstraints ={{right:0,left: -corouselwidth}} style={{"display": "flex"}}>
                                    {
                                        images.map(image => {
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

                </div>

            </>
        );
    }

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}

export default ClientPage;