import { render } from "@testing-library/react";
import React, {Fragment,useState} from "react";
import "./ImageSliderComponent.css"
import imgA from "./images/GEC-ImageCor2.jpg"
import imgC from "./images/GEC-ImageCor3.jpg"
import imgD from "./images/GEC-ImageCor4.jpg"

function ImageSlider() {

    function MobileComponent() {
        return(
            <>
            

            </>
        );
    }

    function DesktopComponent() {

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

        function ImageSlide_A () {
            return(
                <>
                
                    <div className="desktop-imgslider-corousal-container" style={{"backgroundImage": `url(${imgA})`, "background-position": "0px -200px", "animation-name": {SlideTransition}['SlideTransition']}}>

                        <div className="desktop-imgsliderA-container">
                            <h1 style={{"font-weight": "400"}}><span style={{"color": "white"}}>Meet the</span> Professionals</h1>
                            <h2 style={{"font-weight": "400"}}><span style={{"color": "white"}}>of steel structure buildings</span> and precast building structures</h2>
                        </div>

                    </div>
                
                </>
            );
        }

        function ImageSlide_B () {
            return(
                <>
                
                    <div className="desktop-imgslider-corousal-container" style={{"backgroundImage": `url(${imgA})`, "background-position": "0px -200px", "animation-name": {SlideTransition}['SlideTransition']}}>

                        <div className="desktop-imgsliderA-container">
                                    SLIDE B
                        </div>

                    </div>
                
                </>
            );
        }

        function ImageSlide_C () {
            return(
                <>
                
                    <div className="desktop-imgslider-corousal-container" style={{"backgroundImage": `url(${imgC})`, "animation-name": {SlideTransition}['SlideTransition']}}>

                        <div className="desktop-imgsliderA-container">
                            SLIDE C
                        </div>

                    </div>
                
                </>
            );
        }

        function ImageSlide_D () {
            return(
                <>
                
                    <div className="desktop-imgslider-corousal-container" style={{"backgroundImage": `url(${imgD})`, "background-position": "0px -200px", "animation-name": {SlideTransition}['SlideTransition']}}>

                        <div className="desktop-imgsliderA-container">
                            SLIDE D   
                        </div>

                    </div>
                
                </>
            );
        }

        return(
            <>
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