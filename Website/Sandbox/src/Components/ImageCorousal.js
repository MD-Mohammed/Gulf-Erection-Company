import React, {Fragment, useState, useEffect} from "react";
import './ImageCorousal.css';

const ImageCorousal = () => {

    const [Active, setActive] = useState("FirstCard");
    const [Img, setImg] = useState("url(/images/GEC-Image4.jpg)");

    const [SlideTransition, setSlideTransition] = useState("slide-right");

    const Slides = ["FirstCard", "SecondCard", "ThirdCard", "FourthCard"];

    useEffect(() => {
        var i = 0;
        setInterval(() => {
            setActive(Slides[i]);
            i = i + 1
            if (i == 4) {
                i = 0;
            }
        }, 5000);
    }, []);

    function Corousal_1() {

        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor1.jpg)", "animation-name": {SlideTransition}['SlideTransition']}}>
    
                    <div className="imgCor-left-container">
                        <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-left");
                            setActive("FourthCard");
                        }}
                    >&lt;</button>
                    </div>
                    <div className="imgCor-right-container">
                        <div className="imgCor-content-area">
                            <span className="imgCor-cor1-header1">Construction</span>
                            <span className="imgCor-cor1-header2">you can count on!</span>
                            <div className="imgCor-cor1-content">
                                <span>
                                    We are professionals in the field on steel structure builidings and precast buildings constructions...
                                </span>
                            </div>
                            <div style={{"margin-top": "15%", "width": "55%"}}>
                                <button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button>
                                <button className="imgCor-content-area-button" style={{"margin-left": "10%","background-color": "red"}}>LEARN MORE</button>
                            </div>
                        </div>
                        <button className="imgCor-slider-button" 
                            onClick={() => {
                                setSlideTransition("slide-right");
                                setActive("SecondCard");
                            }}
                        >&gt;</button>
                    </div>
    
                </div>

            </>
        );
    }

    function Corousal_2() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor2.jpg)", "justifyContent": "space-between", "alignItems": "center", "animation-name": {SlideTransition}['SlideTransition']}}>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-left");
                            setActive("FirstCard");
                        }}
                    >&lt;</button>

                    <div style={{"height": "350px", "display": "flex", "flex-direction": "column", "alignItems": "center", "margin-top": "5%"}}>
                        <div><span className="imgCor-cor2-header1">We Build</span></div>
                        <div className="imgCor-cor2-header2" style={{"margin-top": "-5%"}}><span>Your Dreams</span></div>
                        <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button></div>
                    </div>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-right");
                            setActive("ThirdCard");
                        }}
                    >&gt;</button>

                </div>
            </>
        );
    }

    function Corousal_3() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor3.jpg)", "justifyContent": "space-between", "alignItems": "center", "animation-name": {SlideTransition}['SlideTransition']}}>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-left");
                            setActive("SecondCard");
                        }}
                    >&lt;</button>

                    <div style={{"height": "360px", "display": "flex", "flex-direction": "column", "alignItems": "flex-start", "margin-top": "10%", "margin-left": "-25%"}}>
                        <div><span className="imgCor-cor3-content" style={{"font-weight": "500", "color": "red", "animation-delay": "0.5s"}} >HELPING YOU</span></div>
                        <div style={{"margin-top": "-5%"}}><span className="imgCor-cor3-content" style={{"animation-delay": "1s"}}>AND YOUR PROJECT</span></div>
                        <div style={{"margin-top": "-5%"}}><span className="imgCor-cor3-content" style={{"animation-delay": "1.5s"}}>BECOME BETTER</span></div>
                        <div style={{"visibility": "hidden", "margin-top": "-5%", "animation-name": "slide-text-right", "animation-delay": "2s", "animation-duration": "2s", "animation-fill-mode": "forwards"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "400%", "color": "white"}}>AQUAINTED</span></div>
                        <div style={{"display": "flex", "flex-direction": "row"}}>
                            <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>MORE INFO</button></div>
                            <div style={{"margin-top": "10%", "margin-left": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "red"}}>VIEW MORE</button></div>
                        </div>
                    </div>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-right");
                            setActive("FourthCard");
                        }}
                    >&gt;</button>

                </div>
            </>
        );
    }

    function Corousal_4() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor4.jpg)", "justifyContent": "space-between", "alignItems": "center", "animation-name": {SlideTransition}['SlideTransition']}}>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-left");
                            setActive("ThirdCard");
                        }}
                    >&lt;</button>

                    <div style={{"height": "350px", "display": "flex", "flex-direction": "column", "alignItems": "center", "margin-top": "5%"}}>
                        <div><span className="imgCor-cor2-header1" style={{"color": "white"}}>We Build</span></div>
                        <div style={{"margin-top": "-5%"}}><span className="imgCor-cor2-header2">Your Dreams</span></div>
                        <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button></div>
                    </div>

                    <button className="imgCor-slider-button" 
                        onClick={() => {
                            setSlideTransition("slide-right");
                            setActive("FirstCard");
                        }}
                    >&gt;</button>

                </div>
            </>
        );
    }

    return(
        <div className="imgCor-slide-top">
            { Active === "FirstCard" && <Corousal_1 /> }
            { Active === "SecondCard" && <Corousal_2 /> }
            { Active === "ThirdCard" && <Corousal_3 /> }
            { Active === "FourthCard" && <Corousal_4 /> }
        </div>
    );
}

export default ImageCorousal;