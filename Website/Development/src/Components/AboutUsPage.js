import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './AboutUsPage.css';
import img1 from './images/aboutus-icon.png'
import img2 from './images/aboutus-image.jpg'
import img3 from './images/medal.png'

function AboutUsPage() {

    return(
        <>
 
 <div className="aboutPage-main-container">
                 
                 <div className="aboutpage-main-container-block" style={{"flex":"1","flexDirection":"column"}}>
                     
                     <div style={{"display":"flex"}}>  
                        <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={img1} alt=""/>
                        
                        <h1 style={{"marginLeft":"20px","marginTop":"5px"}}>
                            ABOUT US
                        </h1>
                     </div>
                     <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"20px"}}>
                     </div>
                 </div>
                 <div className="aboutpage-main-container-block" style={{"flex":"8"}}>
                     
                     <div className="aboutpage-sub-container-details" style={{"flex":"1"}}>
                         
                         <img className="aboutPage-img-prop" src ={img2}>
                         </img>
                     </div>
                     <div className="aboutpage-sub-container-details" style={{"flex":"1", "flexDirection":"column","marginLeft":"50px","display":"flex","marginRight":"50px","marginTop":"50px"}}>
                         
                         <h2 style={{"flex":"1"}}>
                         We meet your build expectations with exceptional quality 
                         </h2>
                         <a style={{"textAlign":"justify","fontSize":"20px","lineHeight":"23px","flex":"2"}}>
                         Being professionals with decades of experience competing in the space of steel structure buildings, we have maintained growth and prominence with the leading infrastructure and technology to meet the developing demands of the country.
                         </a>
                         <div style={{"display":"flex","flexDirection":"row","flex":"1"}}>
                            <div style={{"display":"flex","flexDirection":"row","flex":"1"}}>
                                <img  className="aboutPage-badge-img-prop" src= {img3} />
                                <h2 className="aboutPage-badge-text">Trade License</h2>
                            </div>
                            <div style={{"display":"flex","flexDirection":"row","flex":"1"}}>
                                <img  className="aboutPage-badge-img-prop" src= {img3} />
                                <h2 className="aboutPage-badge-text">Trade License</h2>
                            </div>
                            <div style={{"display":"flex","flexDirection":"row","flex":"1"}}>
                                <img  className="aboutPage-badge-img-prop" src= {img3} />
                                <h2 className="aboutPage-badge-text">Trade License</h2>
                            </div>
                         </div>
                         <div style={{"display":"flex","flexDirection":"row","margin":"2%"}}>
                            <div style={{"justifyContent":"center"}} className="aboutPage-button">
                                    
                                    <h2 style={{"justifyContent":"center"}}className="aboutPage-badge-text">Read More</h2>
                                </div>
                                <div style={{"backgroundColor":"#FF0000","justifyContent":"center"}}className="aboutPage-button">
                                    
                                    <h2 className="aboutPage-badge-text">Download Brochure</h2>
                                </div>
                                
                            


                         </div>
                     </div>
                 </div>
                 <div className="aboutpage-main-container-block" style={{"flex":"3","justifyItems":"center","alignItems":"center","justifyContent":"space-around"}}>
                     
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