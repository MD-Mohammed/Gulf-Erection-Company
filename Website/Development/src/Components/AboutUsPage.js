import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './AboutUsPage.css';
import './main.css';

import Brochure from "../Data/GEC-Profile.pdf"

function AboutUsPage() {

    const [ReadMore, setReadMore] = useState(false);
    const [Badge_A, setBadge_A] = useState(false);
    const [Badge_B, setBadge_B] = useState(false);
    const [Badge_C, setBadge_C] = useState(false);

    function DesktopComponent() {

        function DesktopContent_Aboutus () {
            return(
                <>
    
                    <div className="desktop-aboutus-popup-content-area-main-container">
    
                        <div className="desktop-content-main-container">
    
                            <div>
                            
                                <h1 style={{"color": "#FF4343","margin-bottom": "3%"}}>Our Mission</h1>
        
                                <p className="desktop-content-style" style={{"margin-bottom": "2%"}}>
                                    The Gulf Erection Company has been through a rapid growth to prove and successfully 
                                    stand among the leading companies in the area of steel structure and pre-engineered 
                                    building erectors in the emirate of Abu Dhabi and Al Ain.
                                </p>
        
                                <div style={{"display": "flex", "width": "100%", "margin-top": "0%", "height": "300px"}}>
        
                                    <div style={{"height": "100%", "width": "50%"}}>
                                        <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover", "object-position": "0px -50px"}} src={ process.env.PUBLIC_URL + "/images/our-mission.jpg" } />
                                    </div>
        
                                    <div style={{"height": "100%", "margin-left": "2%", "width": "50%", "display": "flex", "flex-direction": "column", "justify-content": "space-between"}}>
        
                                        <p className="desktop-content-style">
                                            Ever since we began our operations and expansion, we have stood up to meet the
                                            expectations of our customers by constantly evolving and adapting to the developments
                                            and transformations.
                                        </p>
        
                                        <p className="desktop-content-style">
                                            Our objective is to provide quality services according to our client requirements with
                                            planning and specifications, design-built, authority requirement bugetary costing, 
                                            percentage management and economically guaranteed pricing.
                                        </p>
        
                                        <p className="desktop-content-style">
                                            We guarantee your project's realization with the best quality criteria at unbelievable
                                            schedules. Gulf Erection Company aims to be that trustful partner when you 
                                            need your project delivered within your budget and schedule. We hope to soon have the 
                                            opportunity to demonstrate our dyanamism and expertise at what we do the best.
                                        </p>
        
                                    </div>
        
                                </div>

                            </div>
    
                            <div>
                            
                                <h1 style={{"color": "#FF4343","margin-bottom": "1%", "margin-top": "5%"}}>Our Vision</h1>
    
                                <div style={{"display": "flex", "width": "100%", "margin-top": "3%", "height": "600px", "flex-direction": "column"}}>
    
                                    <div style={{"height": "80%", "width": "100%"}}>
                                        <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover", "object-position": "0px -550px"}} src={ process.env.PUBLIC_URL + "/images/vision-image.jpg" } />
                                    </div>
    
                                    <div style={{"height": "20%", "margin-right": "2%", "width": "100%", "margin-top": "2%", "margin-bottom": "2%"}}>
    
                                        <p className="desktop-content-style" style={{"margin-left": "4%", "margin-right": "4%", "text-align": "center", "font-size": "150%"}}>
                                            Establish a benchmark in quality construction and engineering by promising well 
                                            grounded and reliableworks that directly contributes to the development of the 
                                            country.
                                        </p>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                            <div>
                            
                                <h1 style={{"color": "#FF4343","margin-bottom": "1%", "margin-top": "0%"}}>What we do ?</h1>
    
                                <div style={{"display": "flex", "width": "100%", "margin-top": "0%", "height": "300px"}}>
    
                                    <div style={{"height": "100%", "margin-right": "2%", "width": "50%","display": "flex", "flex-direction": "column", "justify-content": "space-between"}}>
    
                                        <p className="desktop-content-style" style={{"margin-bottom": "0%"}}>
                                        Throughout these years of experience that we have achieved, we have contributed our expertise 
                                        in a wide variety of areas.
                                        </p>
    
                                        <ul className="desktop-content-style">
                                            <li>Showrooms and facilities that includes workshops, car wash facilities and more.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>Multi storey car parking.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>Industrial plants and manufacturing factories.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>School buildings and complete facilities.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>Storage facility and bus depots.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>Cold storages and hatcheries.</li>
                                        </ul>
    
                                        <ul className="desktop-content-style">
                                            <li>Onshore and offshore oil field works.</li>
                                        </ul>
    
                                    </div>
    
                                    <div style={{"height": "100%", "width": "50%"}}>
                                        <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover", "object-position": "0px -50px"}} src={ process.env.PUBLIC_URL + "/images/we-do-image.jpg" } />
                                    </div>
    
                                </div>
    
                            </div>

                           <div style={{"marginTop":"5%"}}>
                            
                           </div>
    
                        </div>
    
                    </div>
                
                </>
            )
        }

        return(
                <>
    
                    <div className="desktop-aboutus-page-main-container" id="desktop-aboutus-component">
                                    
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

                                            <a href={Brochure} download={Brochure} className="desktop-aboutus-page-buttons" style={{"background-color": "#FF4343", "width": "45%", "margin-left": "5%"}}>Download Brochure</a>
                                        
                                </div>

                            </div>
                        </div>
                        
                        <div className="desktop-aboutus-page-grids-main-container">
                            
                            <div className="desktop-aboutus-page-grids-inner-container">
                            
                                <div className="desktop-abutus-page-sub-container-gridBox-text">
                                    <h1>40+</h1>
                                    <a style={{"font-weight": "200", "font-size": "110%"}}>Years of experience</a>
                                </div>

                                <div className="desktop-abutus-page-sub-container-gridBox-text">
                                    <h1>700+</h1>
                                    <a style={{"font-weight": "200", "font-size": "110%"}}>Projects completed</a>
                                </div>

                                <div className="desktop-abutus-page-sub-container-gridBox-text">
                                    <h1>25+</h1>
                                    <a style={{"font-weight": "200", "font-size": "110%"}}>Satisified clients</a>
                                </div>

                                <div className="desktop-abutus-page-sub-container-gridBox-text">
                                    <h1>600+</h1>
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
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/Trade-Certificate-A.jpg" }  />
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/Trade-Certificate-B.jpg" }  />
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
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-A.jpg" }  />
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-B.jpg" }  />
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-C.jpg" }  />
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
                                            <img className="desktop-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ICV-Certificate.jpg" }  />
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

                                    <DesktopContent_Aboutus />

                                </div>
                            </div>

                        </div>
                    }

            </>
        );   
    }

    function MobileComponent() {

        function MobileContent_Aboutus() {
            return(
                <>
                
                    <div className="desktop-aboutus-popup-content-area-main-container">

                        <div className="desktop-content-main-container">

                            <div>

                                <h2 style={{"color": "#FF4343","margin-bottom": "10%", "font-weight": "400"}}>Our Mission</h2>
                            
                                <p className="desktop-content-style" style={{"margin-bottom": "2%"}}>
                                    The Gulf Erection Company has been through a rapid growth to prove and successfully 
                                    stand among the leading companies in the area of steel structure and pre-engineered 
                                    building erectors in the emirate of Abu Dhabi and Al Ain.
                                </p>

                                <div style={{"display": "flex", "flex-direction": "column", "width": "100%"}}>
                                    
                                    <div style={{"height": "100%", "width": "100%", "margin-top": "5%"}}>
                                        <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/our-mission.jpg" } />
                                    </div>

                                    <div style={{"height": "100%", "width": "100%", "display": "flex", "flex-direction": "column", "justify-content": "space-between"}}>

                                        <p className="desktop-content-style" style={{"margin-top":"5%"}}>
                                            Ever since we began our operations and expansion, we have stood up to meet the
                                            expectations of our customers by constantly evolving and adapting to the developments
                                            and transformations.
                                        </p>

                                        <p className="desktop-content-style" style={{"margin-top":"5%"}}>
                                            Our objective is to provide quality services according to our client requirements with
                                            planning and specifications, design-built, authority requirement bugetary costing, 
                                            percentage management and economically guaranteed pricing.
                                        </p>

                                        <p className="desktop-content-style" style={{"margin-top":"5%"}}>
                                            We guarantee your project's realization with the best quality criteria at unbelievable
                                            schedules. Gulf Erection Company aims to be that trustful partner when you 
                                            need your project delivered within your budget and schedule. We hope to soon have the 
                                            opportunity to demonstrate our dyanamism and expertise at what we do the best.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div>

                                <h2 style={{"color": "#FF4343","margin-bottom": "10%", "margin-top": "10%", "font-weight": "400"}}>Our Vision</h2>

                                <div style={{"height": "80%", "width": "100%"}}>
                                    <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/vision-image.jpg" } />
                                </div>

                                <div style={{"height": "20%", "margin-right": "2%", "width": "100%", "margin-top": "2%", "margin-bottom": "2%"}}>

                                    <p className="desktop-content-style" style={{"margin-top": "5%"}}>
                                        Establish a benchmark in quality construction and engineering by promising well 
                                        grounded and reliableworks that directly contributes to the development of the 
                                        country.
                                    </p>

                                </div>

                            </div>

                            <div>

                                <h2 style={{"color": "#FF4343","margin-top": "10%", "margin-bottom": "10%", "font-weight": "400"}}>What we do ?</h2>
                            
                                <p className="desktop-content-style" style={{"margin-bottom": "2%"}}>
                                    Throughout these years of experience that we have achieved, we have contributed our expertise 
                                    in a wide variety of areas.
                                </p>

                                <div style={{"display": "flex", "flex-direction": "column", "width": "100%"}}>
                                    
                                    <div style={{"height": "100%", "width": "100%", "margin-top": "5%"}}>
                                        <img style={{"height": "100%", "width": "100%", "border-radius": "10px", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/we-do-image.jpg" } />
                                    </div>

                                    <ul className="desktop-content-style" style={{"margin-top": "10%", "margin-left": "-5%", "line-height": "200%"}}>
                                        <li>Showrooms and facilities that includes workshops, car wash facilities and more.</li>
                                        <li>Multi storey car parking.</li>
                                        <li>Industrial plants and manufacturing factories.</li>
                                        <li>School buildings and complete facilities.</li>
                                        <li>Storage facility and bus depots.</li>
                                        <li>Cold storages and hatcheries.</li>
                                        <li>Onshore and offshore oil field works.</li>
                                    </ul>

                                </div>

                            </div>

                            <div>

                                <h2 style={{"color": "#FF4343","margin-top": "10%", "margin-bottom": "10%", "font-weight": "400"}}>Health, Safety and Environment - We are resposible!</h2>

                                <div>

                                    <iframe 
                                        width="100%" 
                                        height="200px" 
                                        src="https://www.youtube.com/embed/CSV8GtV7M2U" 
                                        title="YouTube video player" frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                    </iframe>

                                </div>

                            </div>

                        </div>

                    </div>
                
                </>
            )
        }

        return(
            <>
                <div className="mobile-aboutus-page-main-container" id="mobile-aboutus-component">

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

                            <a href={Brochure} download={Brochure} className="mobile-aboutus-page-buttons" style={{"background-color": "#FF4343", "margin-top": "5%", "color": "white"}} >Download Brochure</a>

                        </div>

                        <div className="mobile-aboutus-page-grids-main-container">
                            
                            <div className="mobile-aboutus-page-sub-container-gridBox-text">
                                <h2>40+</h2>
                                <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Years of experience</a>
                            </div>

                            <div className="mobile-aboutus-page-sub-container-gridBox-text">
                                <h2>700+</h2>
                                <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Projects completed</a>
                            </div>

                            <div className="mobile-aboutus-page-sub-container-gridBox-text">
                                <h2>25+</h2>
                                <a style={{"font-weight": "200", "font-size": "95%", "text-align": "center"}}>Satisified clients</a>
                            </div>

                            <div className="mobile-aboutus-page-sub-container-gridBox-text">
                                <h2>600+</h2>
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
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/Trade-Certificate-A.jpg" }  />
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/Trade-Certificate-B.jpg" }  />
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

                            <div className="mobile-aboutus-popup-content-container">
                                <div className="mobile-aboutus-popup-content-container" style={{"margin-bottom": "15%"}}>
                                    <div className="desktop-aboutus-badge-main-container">
                                        <div className="desktop-aboutus-certificate-container">
                                            <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-A.jpg" }  />
                                            <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-B.jpg" }  />
                                            <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ISO-Certificate-C.jpg" }  />
                                        </div>  
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
                                        <img className="mobile-aboutus-certificate-image" src={ process.env.PUBLIC_URL + "/images/ICV-Certificate.jpg" }  />
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

                                <MobileContent_Aboutus />

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