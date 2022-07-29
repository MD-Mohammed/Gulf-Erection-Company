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
            <div className="mobile-aboutus-page-main-container">

                <div className="mobile-header-container">
                
                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                        <img style={{"height": "60%", "width": "17.5%", "margin-top": "-7%"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                        
                        <h3 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>
                            About us
                        </h3>
                    </div>

                    <div className="mobile-header-line" />

                </div>

                <div className="mobile-aboutus-page-content-block">

                    <div className="mobile-aboutus-page-text-box">

                        <h5> We meet your build expectations with exceptional quality </h5>

                        <a style={{"text-align":"justify","font-size":"110%","font-weight": "300", "margin-top": "5%"}}>
                        Being professionals with decades of experience competing in the space of steel structure buildings, we have maintained growth and prominence with the leading infrastructure and technology to meet the developing demands of the country.
                        </a>

                    </div>

                    <div className="mobile-aboutus-page-image-container">
                        <img className="mobile-aboutus-page-img-prop" src={ process.env.PUBLIC_URL + "/images/aboutus-image.jpg" } />
                    </div>

                    <div className="mobile-aboutus-page-certificate-container">

                        <div className="mobile-aboutus-page-badges">
                            <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>Trade<br/>License</h2>
                        </div>

                        <div className="mobile-aboutus-page-badges">
                            <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ISO<br/>Certificate</h2>
                        </div>

                        <div className="mobile-aboutus-page-badges">
                            <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                            <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ICV<br/>Certificate</h2>
                        </div>

                    </div>

                    <div className="mobile-aboutus-page-buttons-container">

                        <button className="mobile-aboutus-page-buttons" >Read More</button>

                        <button className="mobile-aboutus-page-buttons" style={{"background-color": "#FF4343", "margin-top": "5%"}} >Download Brochure</button>

                    </div>

                    <div className="mobile-aboutus-page-grids-main-container">
                        
                        <div className="mobile-aboutus-page-sub-container-gridBox-text">
                            <h2>20+</h2>
                            <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Years of experience</a>
                        </div>

                        <div className="mobile-aboutus-page-sub-container-gridBox-text">
                            <h2>100+</h2>
                            <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Projects completed</a>
                        </div>

                        <div className="mobile-aboutus-page-sub-container-gridBox-text">
                            <h2>25+</h2>
                            <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Satisified clients</a>
                        </div>

                        <div className="mobile-aboutus-page-sub-container-gridBox-text">
                            <h2>300+</h2>
                            <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Active workers</a>
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