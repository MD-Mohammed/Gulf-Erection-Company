import { render } from "@testing-library/react";
import React, {Fragment,useState} from "react";
import "./ImageSliderComponent.css"
import imgA from "./images/GEC-ImageCor2.jpg"
import imgC from "./images/GEC-ImageCor3.jpg"
import imgD from "./images/GEC-ImageCor4.jpg"

function ImageSlider() {

    const [Active, setActive] = useState("SlideA");

    const [SlideTransition, setSlideTransition] = useState("slide-right");

    const ChangeSlideRight = () => {

        setSlideTransition("slide-right");

        if ({Active}['Active'] == "SlideA")
        {
            setActive("SlideB")
        }

        if ({Active}['Active'] == "SlideB")
        {
            setActive("SlideC")
        }

        if ({Active}['Active'] == "SlideC")
        {
            setActive("SlideD")
        }

        if ({Active}['Active'] == "SlideD")
        {
            setActive("SlideA")
        }
    
    }

    const ChangeSlideLeft = () => {

        setSlideTransition("slide-left");

        if ({Active}['Active'] == "SlideA")
        {
            setActive("SlideD")
        }

        if ({Active}['Active'] == "SlideB")
        {
            setActive("SlideA")
        }

        if ({Active}['Active'] == "SlideC")
        {
            setActive("SlideB")
        }

        if ({Active}['Active'] == "SlideD")
        {
            setActive("SlideC")
        }
    }

    function MobileComponent() {

        function ImageSlide_A () {
            return(
                <>
                
                    <div className="mobile-imgslider-corousal-container">

                        <div className="mobile-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                            <img style={{"width": "100%", "height": "100%", "object-fit": "cover", "object-position": "-250px 40px"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor2.jpg" } />
                            
                            <div className="mobile-imgslider-container">
                                <h1 style={{"font-weight": "400", "font-size": "150%", "margin-top": "50%"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                                <h2 style={{"font-weight": "400", "font-size": "80%"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                            </div>

                        </div>
                        
                    </div>

                
                </>
            );
        }

        function ImageSlide_B () {
            return(
                <>
                
                    <div className="mobile-imgslider-corousal-container">

                        <div className="mobile-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                            <img style={{"width": "100%", "height": "100%", "object-fit": "cover", "object-position": "-250px 40px"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor3.jpg" } />
                            
                            <div className="mobile-imgslider-container">
                                <h1 style={{"font-weight": "400", "font-size": "150%", "margin-top": "50%"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                                <h2 style={{"font-weight": "400", "font-size": "80%"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                            </div>

                        </div>

                    </div>

                </>
            );
        }

        function ImageSlide_C () {
            return(
                <>
                
                    <div className="mobile-imgslider-corousal-container">

                        <div className="mobile-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                            <img style={{"width": "100%", "height": "100%", "object-fit": "cover", "object-position": "-250px 40px"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor4.jpg" } />
                            
                            <div className="mobile-imgslider-container">
                                <h1 style={{"font-weight": "400", "font-size": "150%", "margin-top": "50%"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                                <h2 style={{"font-weight": "400", "font-size": "80%"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                            </div>

                        </div>

                    </div>

                </>
            );
        }

        function ImageSlide_D () {
            return(
                <>
                
                    <div className="mobile-imgslider-corousal-container">

                        <div className="mobile-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                            <img style={{"width": "100%", "height": "100%", "object-fit": "cover", "object-position": "-250px 40px"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor1.jpg" } />
                            
                            <div className="mobile-imgslider-container">
                                <h1 style={{"font-weight": "400", "font-size": "150%", "margin-top": "50%"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                                <h2 style={{"font-weight": "400", "font-size": "80%"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                            </div>

                        </div>

                    </div>

                </>
            );
        }

        return(
            <>
            
                <div style={{"height": "90px"}} id="mobile-home-component"/>
                
                <div className="mobile-imgslider-main-container">

                    <button className="mobile-imgslider-button-container" onClick={() => {
                        ChangeSlideLeft();
                    }}>&lt;</button>

                    <button className="mobile-imgslider-button-container" onClick={() => {
                        ChangeSlideRight();
                    }}>&gt;</button>

                    { Active === "SlideA" && <ImageSlide_A /> }
                    { Active === "SlideB" && <ImageSlide_B /> }
                    { Active === "SlideC" && <ImageSlide_C /> }
                    { Active === "SlideD" && <ImageSlide_D /> }

                </div>

            </>
        );
    }

    function DesktopComponent() {

        function ImageSlide_A () {
            return(
                <>
                
                    <div className="desktop-imgslider-corousal-container">

                            <div className="desktop-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                                <img style={{"width": "100%", "height": "100%", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor2.jpg" } />
                                
                                <div className="desktop-imgslider-container">
                                    <h1 style={{"font-weight": "400"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                                    <h2 style={{"font-weight": "400"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                                </div>

                            </div>

                    </div>
                
                </>
            );
        }

        function ImageSlide_B () {
            return(
                <>
                
                <div className="desktop-imgslider-corousal-container">

                    <div className="desktop-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                        <img style={{"width": "100%", "height": "100%", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor3.jpg" } />
                        
                        <div className="desktop-imgslider-container">
                            <h1 style={{"font-weight": "400"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                            <h2 style={{"font-weight": "400"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                        </div>

                    </div>

                </div>
                
                </>
            );
        }

        function ImageSlide_C () {
            return(
                <>
                
                <div className="desktop-imgslider-corousal-container">

                    <div className="desktop-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                        <img style={{"width": "100%", "height": "100%", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor4.jpg" } />
                        
                        <div className="desktop-imgslider-container">
                            <h1 style={{"font-weight": "400"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                            <h2 style={{"font-weight": "400"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                        </div>

                    </div>

                </div>
 
                
                </>
            );
        }

        function ImageSlide_D () {
            return(
                <>
                
                <div className="desktop-imgslider-corousal-container">

                    <div className="desktop-slider-img-property"  style={{"animation-name": {SlideTransition}['SlideTransition']}}>

                        <img style={{"width": "100%", "height": "100%", "object-fit": "cover"}} src={ process.env.PUBLIC_URL + "/images/GEC-ImageCor1.jpg" } />
                        
                        <div className="desktop-imgslider-container">
                            <h1 style={{"font-weight": "400"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                            <h2 style={{"font-weight": "400"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                        </div>

                    </div>

                </div>
 
                
                </>
            );
        }

        return(
            <>
                <div style={{"height": "100px"}} id="desktop-home-component"/>
                
                <div className="desktop-imgslider-main-container">

                    <button className="desktop-imgslider-button-container" onClick={() => {
                        ChangeSlideLeft();
                    }}>&lt;</button>

                    <button className="desktop-imgslider-button-container" onClick={() => {
                        ChangeSlideRight();
                    }}>&gt;</button>

                    { Active === "SlideA" && <ImageSlide_A /> }
                    { Active === "SlideB" && <ImageSlide_B /> }
                    { Active === "SlideC" && <ImageSlide_C /> }
                    { Active === "SlideD" && <ImageSlide_D /> }

                </div>
            
            </>
        );
    }

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;

} 

export default ImageSlider;