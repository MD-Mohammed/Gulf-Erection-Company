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
            <div className="ClientPage-desk-Main-container">
                
                <div style={{"height":"10%"}}>
                    
                     <div style={{"display":"flex"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5px","color":"white"}}>
                            SUCCESSFUL ASSOCIATIONS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                </div>
                <div style={{"height":"80%"}} className="ClientPage-desk-container">
                    <div className="ClientPage-desk-App">
                        <motion.div ref={corousel}className="ClientPage-desk-Main-Corousel">
                            <motion.div drag ="x" dragConstraints ={{right:0,left: -corouselwidth}}className="ClientPage-desk-inner-Corousel">
                                {
                                    images.map(image => {
                                        return(
                                            <motion.div className="ClientPage-desk-item-image" key={image}> 
                                                <img src={image} alt ="" />
                                                
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
            <div className="ClientPage-mobile-Main-container">
                
                <div style={{"height":"10%"}}>
                    
                     <div style={{"display":"flex"}}>  
                            <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/clients-icon.png" }/>
                            
                            <h1 style={{"marginLeft":"20px","marginTop":"5px","color":"white"}}>
                            SUCCESSFUL ASSOCIATIONS
                            </h1>
                        </div>
                        <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                        </div>
                </div>
                <div style={{"height":"80%"}} className="ClientPage-mobile-container">
                    <div className="ClientPage-mobile-App">
                        <motion.div ref={corousel}className="ClientPage-mobile-Main-Corousel">
                            <motion.div drag ="x" dragConstraints ={{right:0,left: -corouselwidth}}className="ClientPage-mobile-inner-Corousel">
                                {
                                    images.map(image => {
                                        return(
                                            <motion.div className="ClientPage-mobile-item-image" key={image}> 
                                                <img src={image} alt ="" />
                                                
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