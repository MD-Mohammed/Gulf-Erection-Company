import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './AboutUsPage.css';

function AboutUsPage() {

    return(
        <>
 
 <div className="aboutPage-main-container">
                 
                 <div className="aboutpage-main-container-block" style={{"flex":"1","flexDirection":"column"}}>
                     
                     <div style={{"display":"flex", "margin-left": "-2%"}}>  
                        <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                        
                        <h1 style={{"marginLeft":"20px","marginTop":"5px"}}>
                            ABOUT US
                        </h1>
                     </div>
                     <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"-0.5%"}}>
                     </div>
                 </div>

                 <div className="aboutpage-main-container-block" style={{"flex":"8"}}>
                     
                     <div className="aboutpage-sub-container-details" style={{"flex":"1"}}>
                         
                         <img className="aboutPage-img-prop" src={ process.env.PUBLIC_URL + "/images/aboutus-image.jpg" } />
                     </div>
                     
                     <div className="aboutpage-sub-container-details" style={{"flex":"1", "flexDirection":"column","marginLeft":"50px","display":"flex","marginRight":"50px","marginTop":"30px", "justify-content": "space-between", "height": "82%" }}>
                         
                         <h2>
                         We meet your build expectations with exceptional quality 
                         </h2>
                         <a style={{"textAlign":"justify","fontSize":"20px","lineHeight":"23px"}}>
                         Being professionals with decades of experience competing in the space of steel structure buildings, we have maintained growth and prominence with the leading infrastructure and technology to meet the developing demands of the country.
                         </a>

                         <div style={{"display":"flex", "flexDirection":"row", "align-items": "center", "justify-content": "space-between"}}>
                            <div style={{"display":"flex","flexDirection":"row", "align-items": "center", "width": "30%"}}>
                                <img  className="aboutPage-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="aboutPage-badge-text" style={{"margin-top": "2%"}}>Trade License</h2>
                            </div>
                            <div style={{"display":"flex","flexDirection":"row", "align-items": "center", "width": "30%", "justify-content": "center"}}>
                                <img  className="aboutPage-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="aboutPage-badge-text" style={{"margin-top": "2%"}}>ISO Certificate</h2>
                            </div>
                            <div style={{"display":"flex","flexDirection":"row", "align-items": "center", "width": "30%", "justify-content": "flex-end"}}>
                                <img  className="aboutPage-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="aboutPage-badge-text" style={{"margin-top": "2%"}}>ICV Certificate</h2>
                            </div>
                         </div>
                         
                         <div style={{"display":"flex", "flexDirection":"row", "height": "10%"}}>

                                <div className="aboutPage-button">
                                    <a href="#" className="aboutPage-badge-text" style={{"color": "white"}}>Read More</a>
                                </div>

                                <div style={{"backgroundColor":"#FF0000", "width": "40%", "margin-left": "10%"}} className="aboutPage-button">
                                    <a href="#" className="aboutPage-badge-text" style={{"color": "white"}}>Download Brochure</a>
                                </div>
                                
                         </div>
                     </div>
                 </div>
                 
                 <div className="aboutpage-gridBox-main-container">
                     
                     <div className="aboutPage-sub-container-gridBox-text">
                        <h1>20+</h1>
                        <a>Years of experience</a>
                     </div>
                     <div className="aboutPage-sub-container-gridBox-text">
                        <h1>100+</h1>
                        <a>Projects completed</a>
                     </div>
                     <div className="aboutPage-sub-container-gridBox-text">
                        <h1>25+</h1>
                        <a>Satisified clients</a>
                     </div>
                     <div className="aboutPage-sub-container-gridBox-text">
                        <h1>300+</h1>
                        <a>Active workers</a>
                     </div>     
                 </div>
 
             </div>
 
        </>
    );
} 
export default AboutUsPage;