import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import './AboutUsPage.css';
import './main.css';

function AboutUsPage() {

    function DesktopComponent() {

    return(
            <>
 
    <div className="desktop-aboutus-page-main-container">
                    
        <div className="desktop-header-container">
            
            <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                <img style={{"height": "12.5%", "width": "12.5%", "margin-top": "-2%"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                
                <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>
                    About us
                </h1>
            </div>

            <div className="desktop-header-line" />

        </div>

        <div className="desktop-aboutus-page-content-block">
            
            <div className="desktop-aboutus-page-image-container">
                <img className="desktop-aboutus-page-img-prop" src={ process.env.PUBLIC_URL + "/images/aboutus-image.jpg" } />
            </div>
            
            <div className="desktop-aboutus-page-content-container">
                
                <div className="desktop-aboutus-page-text-box">

                    <h2> We meet your build expectations with exceptional quality </h2>

                    <a style={{"text-align":"justify","font-size":"125%", "margin-right": "1%", "font-weight": "300"}}>
                    Being professionals with decades of experience competing in the space of steel structure buildings, we have maintained growth and prominence with the leading infrastructure and technology to meet the developing demands of the country.
                    </a>

                </div>


                <div className="desktop-aboutus-page-certificate-container">

                    <div className="desktop-aboutus-page-badges">
                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>Trade License</h2>
                    </div>

                    <div className="desktop-aboutus-page-badges">
                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ISO Certificate</h2>
                    </div>

                    <div className="desktop-aboutus-page-badges">
                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ICV Certificate</h2>
                    </div>

                </div>
                
                <div className="desktop-aboutus-page-buttons-container">

                            <button className="desktop-aboutus-page-buttons" >Read More</button>

                            <button className="desktop-aboutus-page-buttons" style={{"background-color": "#FF4343", "width": "45%", "margin-left": "5%"}} >Download Brochure</button>
                        
                </div>

            </div>
        </div>
        
        <div className="desktop-aboutus-page-grids-main-container">
            
            <div className="desktop-aboutus-page-grids-inner-container">
            
                <div className="desktop-abutus-page-sub-container-gridBox-text">
                    <h1>20+</h1>
                    <a style={{"font-weight": "200", "font-size": "110%"}}>Years of experience</a>
                </div>

                <div className="desktop-abutus-page-sub-container-gridBox-text">
                    <h1>100+</h1>
                    <a style={{"font-weight": "200", "font-size": "110%"}}>Projects completed</a>
                </div>

                <div className="desktop-abutus-page-sub-container-gridBox-text">
                    <h1>25+</h1>
                    <a style={{"font-weight": "200", "font-size": "110%"}}>Satisified clients</a>
                </div>

                <div className="desktop-abutus-page-sub-container-gridBox-text">
                    <h1>300+</h1>
                    <a style={{"font-weight": "200", "font-size": "110%"}}>Active workers</a>
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
            <div className="aboutPage-mobile-main-container">
                <div className="aboutPage-mobile-container" style={{"height":"10%","flexDirection":"column","marginLeft":"2%"}}> 
                    <div style={{"display":"flex"}}>  
                        <img style={{"marginLeft":"20px","marginTop":"18px","height": "28px", "width": "31px"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                        
                        <h1 style={{"marginLeft":"20px","marginTop":"18px","fontSize":"30px"}}>
                            ABOUT US
                        </h1>
                     </div>
                     <div style={{"backgroundColor":"#FF4343","border":"5px","width":"147px","height":"5px","marginLeft":"2%"}}>
                     </div>

                </div>

                <div className="aboutPage-mobile-container" style={{"marginLeft":"5%"}}>
                    <h2 style={{"font-size":"140%", "font-family": "'Ubuntu', sans-serif"}}>We meet your build expectations with exceptional quality</h2>
                </div>

                <div className="aboutPage-mobile-container" style={{"height":"30%","marginLeft":"2%"}}>
                    <div className="aboutPage-mobile-img-cert" style={{"width":"250px","marginLeft":"3%"}}>
                        <img className="aboutPage-mobile-img-prop" src={ process.env.PUBLIC_URL + "/images/aboutus-image.jpg" } />
                    </div>

                    <div className="aboutPage-mobile-img-cert" style={{"width":"25%", "margin-left": "-1%", "margin-top": "8%", "height": "70%", "justify-content": "space-between"}}>
                       
                        <div style={{"display": "flex", "flex-direction": "column", "align-items": "center"}}>
                            <img  className="aboutPage-mobile-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="aboutPage-mobile-badge-text" style={{"margin-top": "10%"}}>Trade License</h2>
                        </div>
                        <div style={{"display": "flex", "flex-direction": "column", "align-items": "center"}}>
                            <img  className="aboutPage-mobile-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="aboutPage-mobile-badge-text" style={{"margin-top": "10%"}}>ISO Certificate</h2>
                        </div>
                        <div style={{"display": "flex", "flex-direction": "column", "align-items": "center"}}>
                            <img  className="aboutPage-mobile-badge-img-prop" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="aboutPage-mobile-badge-text" style={{"margin-top": "10%"}}>ICV Certificate</h2>
                        </div>
                    </div>
                </div>

                <div className="aboutPage-mobile-container" style={{"height":"20%","marginLeft":"5%", "marginRight":"5%"}}>
                    <a style={{"textAlign":"justify","fontSize":"100%","lineHeight":"23px", "font-family": "'Ubuntu', sans-serif"}}>
                         Being professionals with decades of experience competing in the space of steel structure buildings, we have maintained growth and prominence with the leading infrastructure and technology to meet the developing demands of the country.
                         </a>
                </div>

                <div className="aboutPage-mobile-container" style={{"height":"5%","flexDirection":"row","marginBottom":"1%"}}> 
                 
                        <div className="aboutPage-mobile-button">
                                    <a href="#" className="aboutPage-mobile-badge-text" style={{"color": "white"}}>Read More</a>
                        </div>

                        <div style={{"backgroundColor":"#FF0000"}} className="aboutPage-mobile-button">
                                    <a href="#" className="aboutPage-mobile-badge-text" style={{"color": "white"}}>Download Brochure</a>
                        </div>
                
                </div>

                <div className="aboutPage-mobile-container" style={{"height":"25%","flexDirection":"column"}}> 
                    <div className="aboutpage-mobile-gridBox-main-container">
                        
                        <div className="aboutPage-mobile-sub-container-gridBox-text">
                            <h1>20+</h1>
                            <a>Years of experience</a>
                        </div>
                        <div className="aboutPage-mobile-sub-container-gridBox-text">
                            <h1>100+</h1>
                            <a>Projects completed</a>
                        </div>
                           
                    </div>
                    <div className="aboutpage-mobile-gridBox-main-container">
                        
                        <div className="aboutPage-mobile-sub-container-gridBox-text">
                            <h1>20+</h1>
                            <a>Years of experience</a>
                        </div>
                        <div className="aboutPage-mobile-sub-container-gridBox-text">
                            <h1>100+</h1>
                            <a>Projects completed</a>
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
export default AboutUsPage;