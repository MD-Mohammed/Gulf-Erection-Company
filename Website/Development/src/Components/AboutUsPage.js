import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './AboutUsPage.css';
import './main.css';

function AboutUsPage() {

    const [ReadMore, setReadMore] = useState(false);
    const [Badge_A, setBadge_A] = useState(false);
    const [Badge_B, setBadge_B] = useState(false);
    const [Badge_C, setBadge_C] = useState(false);


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

                                    <div className="desktop-aboutus-page-badges" onClick={() => setBadge_A(true)}>
                                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>Trade License</h2>
                                    </div>

                                    <div className="desktop-aboutus-page-badges" onClick={() => setBadge_B(true)}>
                                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ISO Certificate</h2>
                                    </div>

                                    <div className="desktop-aboutus-page-badges" onClick={() => setBadge_C(true)}>
                                        <img  className="desktop-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                        <h2 className="desktop-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ICV Certificate</h2>
                                    </div>

                                </div>
                                
                                <div className="desktop-aboutus-page-buttons-container">

                                            <button className="desktop-aboutus-page-buttons" onClick={() => setReadMore(!ReadMore)}>Read More</button>

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

                    {
                        Badge_A && 

                        <div className="desktop-popup-modal">

                            <div className="desktop-popup-main-container">

                                <div className="desktop-popup-close-button-container">
                                    <button className="desktop-popup-close-button" onClick={() => setBadge_A(false)}>
                                        <span className="desktop-popus-close-icon">X</span>
                                    </button>
                                </div>

                                <div className="desktop-popup-content-container">
                                    <div className="desktop-aboutus-badge-main-container">
                                        <div className="desktop-aboutus-certificate-container">
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-a.png" }  />
                                        </div>  
                                    </div>
                                </div>
                            </div>

                        </div>

                    }

                    {
                        Badge_B && 

                        <div className="desktop-popup-modal">

                            <div className="desktop-popup-main-container">

                                <div className="desktop-popup-close-button-container">
                                    <button className="desktop-popup-close-button" onClick={() => setBadge_B(false)}>
                                        <span className="desktop-popus-close-icon">X</span>
                                    </button>
                                </div>

                                <div className="desktop-popup-content-container">
                                    <div className="desktop-aboutus-badge-main-container">
                                        <div className="desktop-aboutus-certificate-container">
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-b.png" }  />
                                        </div>  
                                    </div>
                                </div>
                            </div>

                        </div>

                    }

                    {
                        Badge_C && 

                        <div className="desktop-popup-modal">

                            <div className="desktop-popup-main-container">

                                <div className="desktop-popup-close-button-container">
                                    <button className="desktop-popup-close-button" onClick={() => setBadge_C(false)}>
                                        <span className="desktop-popus-close-icon">X</span>
                                    </button>
                                </div>

                                <div className="desktop-popup-content-container">
                                    <div className="desktop-aboutus-badge-main-container">
                                        <div className="desktop-aboutus-certificate-container">
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-c.png" }  />
                                        </div>  
                                    </div>
                                </div>
                            </div>

                        </div>

                    }


                    {
                        ReadMore &&

                        <div className="desktop-popup-modal">

                            <div className="desktop-popup-main-container">

                                <div className="desktop-popup-close-button-container">
                                    <button className="desktop-popup-close-button" onClick={() => setReadMore(false)}>
                                        <span className="desktop-popus-close-icon">X</span>
                                    </button>
                                </div>

                                <div className="desktop-popup-content-container">

                                    <div className="desktop-popup-header-container" style={{"width": "50%"}}>
                                
                                        <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}>  
                                            <img style={{"height": "7.5%", "width": "7.5%", "margin-top": "-3%"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                                            
                                            <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%"}}>
                                                About Gulf Erection Company
                                            </h1>
                                        </div>

                                        <div className="desktop-popup-header-line"/>

                                    </div>

                                    <div className="desktop-aboutus-popup-people-main-container">

                                        <div className="desktop-aboutus-popup-people-container" style={{"margin-top": "2.5%"}}>

                                            <div className="desktop-aboutus-popup-people-image">
                                                <img style={{"width": "80%", "height": "100%", "margin-top": "20%"}} src={ process.env.PUBLIC_URL + "/images/gs.jpg" } />
                                            </div>

                                            <h2 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-top": "5%"}}>George Sawaya</h2>
                                            <h5 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>General Manager</h5>
                                            <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                            </p>

                                        </div>

                                        <div className="desktop-aboutus-popup-people-container">

                                            <div className="desktop-aboutus-popup-people-image">
                                                <img style={{"width": "78%", "height": "100%", "margin-top": "35%"}} src={ process.env.PUBLIC_URL + "/images/ibrahim.jpg" } />
                                            </div>

                                            <h2 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-top": "5%"}}>Ibrahim Sawaya</h2>
                                            <h5 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Founder and Managing Partner</h5>
                                            <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                            </p>

                                        </div>

                                        <div className="desktop-aboutus-popup-people-container" style={{"margin-top": "5%"}}>

                                            <div className="desktop-aboutus-popup-people-image">
                                                <img style={{"width": "80%", "height": "100%", "margin-top": "30%"}} src={ process.env.PUBLIC_URL + "/images/el.jpg" } />
                                            </div>

                                            <h2 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-top": "5%"}}>Elie Sawaya</h2>
                                            <h5 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Founder</h5>
                                            <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="desktop-aboutus-popup-content-area-main-container">

                                        <div style={{"margin-left": "2%", "margin-top": "3%"}}>

                                            <h1>Our Mission</h1>
                                            <p style={{"color": "#16262E", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-right": "5%", "margin-top": "3%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec. 
                                                Morbi venenatis nulla et est venenatis fringilla. 
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                In hac habitasse platea dictumst. Maecenas vitae tincidunt eros, vitae aliquam tortor.

                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    }
    
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

                            <div className="mobile-aboutus-page-badges" onClick={() => setBadge_A(true)}>
                                <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>Trade<br/>License</h2>
                            </div>

                            <div className="mobile-aboutus-page-badges" onClick={() => setBadge_B(true)}>
                                <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ISO<br/>Certificate</h2>
                            </div>

                            <div className="mobile-aboutus-page-badges" onClick={() => setBadge_C(true)}>
                                <img  className="mobile-aboutus-page-badge-icon" src={ process.env.PUBLIC_URL + "/images/medal.png" } />
                                <h2 className="mobile-aboutus-page-badge-text" style={{"margin-top": "2%"}}>ICV<br/>Certificate</h2>
                            </div>

                        </div>

                        <div className="mobile-aboutus-page-buttons-container">

                            <button className="mobile-aboutus-page-buttons" onClick={() => setReadMore(!ReadMore)}>Read More</button>

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

                {
                    Badge_A && 

                    <div className="mobile-popup-modal" style={{"height": "auto", "align-items": "center"}}>

                        <div className="mobile-popup-main-container" style={{"height": "auto", "border-radius": "20px"}}>

                            <div className="mobile-popup-close-button-container">
                                <button className="mobile-popup-close-button" onClick={() => setBadge_A(false)}>
                                    <span className="mobile-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="mobile-aboutus-popup-content-container" style={{"margin-bottom": "15%"}}>
                                <div className="desktop-aboutus-badge-main-container">
                                    <div className="desktop-aboutus-certificate-container">
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-a.png" }  />
                                    </div>  
                                </div>
                            </div>
                        </div>

                    </div>

                }

                {
                    Badge_B && 

                    <div className="mobile-popup-modal" style={{"height": "auto", "align-items": "center"}}>

                        <div className="mobile-popup-main-container" style={{"height": "auto", "border-radius": "20px"}}>

                            <div className="mobile-popup-close-button-container">
                                <button className="mobile-popup-close-button" onClick={() => setBadge_B(false)}>
                                    <span className="mobile-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="mobile-aboutus-popup-content-container" style={{"margin-bottom": "15%"}}>
                                <div className="desktop-aboutus-badge-main-container">
                                    <div className="desktop-aboutus-certificate-container">
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-b.png" }  />
                                    </div>  
                                </div>
                            </div>
                        </div>

                    </div>

                }

                {
                    Badge_C && 

                    <div className="mobile-popup-modal" style={{"height": "auto", "align-items": "center"}}>

                        <div className="mobile-popup-main-container" style={{"height": "auto", "border-radius": "20px"}}>

                            <div className="mobile-popup-close-button-container">
                                <button className="mobile-popup-close-button" onClick={() => setBadge_C(false)}>
                                    <span className="mobile-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="mobile-aboutus-popup-content-container" style={{"margin-bottom": "15%"}}>
                                <div className="desktop-aboutus-badge-main-container">
                                    <div className="desktop-aboutus-certificate-container">
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/certificate-c.png" }  />
                                    </div>  
                                </div>
                            </div>
                        </div>

                    </div>

                }

                {
                    ReadMore && 

                    <div className="mobile-popup-modal">

                        <div className="mobile-popup-main-container">

                            <div className="mobile-popup-close-button-container">
                                <button className="mobile-popup-close-button" onClick={() => setReadMore(false)}>
                                    <span className="mobile-popus-close-icon">X</span>
                                </button>
                            </div>

                            <div className="mobile-aboutus-popup-content-container">
                                
                                <div className="mobile-popup-header-container">
                                    
                                    <div style={{"display":"flex", "align-items": "center", "gap": "5%"}}> 

                                        <img style={{"height": "7.5%", "width": "10%", "margin-top": "-4%"}} src={ process.env.PUBLIC_URL + "/images/aboutus-icon.png" }/>
                                        
                                        <h1 style={{"font-family": "'Ubuntu', sans-serif", "font-weight": "400", "margin-left": "-2%", "font-size": "175%"}}>
                                            About Us
                                        </h1>

                                    </div>

                                    <div className="mobile-popup-header-line"/>

                                </div>

                                <div className="mobile-aboutus-popup-people-main-container">

                                    <div className="mobile-aboutus-popup-people-container">
                                    
                                        <div className="mobile-aboutus-popup-image-text-container">

                                            <div className="mobile-aboutus-popup-people-image">
                                                <img style={{"width": "80%", "height": "100%", "margin-top": "20%"}} src={ process.env.PUBLIC_URL + "/images/gs.jpg" } />
                                            </div>

                                            <div className="mobile-aboutus-popup-people-text">
                                                <h4 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>George Sawaya</h4>
                                                <h6 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>General Manager</h6>
                                            </div>

                                        </div>

                                        <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "-2.5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec.
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem. 
                                        </p>

                                    </div>

                                    <div className="mobile-aboutus-popup-people-container">
                                    
                                        <div className="mobile-aboutus-popup-image-text-container">

                                            <div className="mobile-aboutus-popup-people-image">
                                                <img style={{"width": "80%", "height": "100%", "margin-top": "20%"}} src={ process.env.PUBLIC_URL + "/images/ibrahim.jpg" } />
                                            </div>

                                            <div className="mobile-aboutus-popup-people-text">
                                                <h4 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Ibrahim Sawaya</h4>
                                                <h6 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Founder and Managing Partner</h6>
                                            </div>

                                        </div>

                                        <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "-2.5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec.
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem. 
                                        </p>

                                    </div>

                                    <div className="mobile-aboutus-popup-people-container">
                                    
                                        <div className="mobile-aboutus-popup-image-text-container">

                                            <div className="mobile-aboutus-popup-people-image">
                                                <img style={{"width": "80%", "height": "100%", "margin-top": "20%"}} src={ process.env.PUBLIC_URL + "/images/el.jpg" } />
                                            </div>

                                            <div className="mobile-aboutus-popup-people-text">
                                                <h4 style={{"color": "#FF4343", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Elie Sawaya</h4>
                                                <h6 style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "400"}}>Founder</h6>
                                            </div>

                                        </div>

                                        <p style={{"color": "white", "font-family": "'Ubuntu', sans-serif", "font-weight": "200", "margin-left": "5%", "margin-right": "5%", "margin-top": "-2.5%", "text-align": "justify"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quis tellus vitae dapibus. 
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem, a fringilla felis tincidunt nec.
                                                Nam facilisis tellus eu molestie porta. Morbi cursus eros lorem. 
                                        </p>

                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                }
    
            </>
        );
    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? 
        (
            <>
            
                <MobileComponent />
            
            </>
            
        )
            : 
        (
            <>
            
                <DesktopComponent /> 
            
            </>
            
        )

}
export default AboutUsPage;