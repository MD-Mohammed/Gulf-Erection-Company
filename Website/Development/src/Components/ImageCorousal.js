import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import './ImageCorousal.css';

const ImageCorousal = () => {

    const [Active, setActive] = useState("FirstCard");
    const [Img, setImg] = useState("url(/images/GEC-Image4.jpg)");

    function Corousal_1() {

        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor1.jpg)"}}>
    
                    <div className="imgCor-left-container">
                        <button className="imgCor-slider-button" onClick={() => setActive("FourthCard")}>&lt;</button>
                    </div>
                    <div className="imgCor-right-container">
                        <div className="imgCor-content-area">
                            <span style={{"margin-top": "-15%","font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "450%"}}>Construction</span>
                            <span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "500", "font-size": "450%", "margin-top": "-5%"}}>you can count on!</span>
                            <div style={{"width": "70%", "margin-top": "2%", "font-size": "120%", "font-family": "'Montserrat', sans-serif", "font-weight": "300"}}>
                                <span>
                                    We are professionals in the field on steel structure builidings and precast buildings constructions...
                                </span>
                            </div>
                            <div style={{"margin-top": "15%", "width": "55%"}}>
                                <button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button>
                                <button className="imgCor-content-area-button" style={{"margin-left": "10%","background-color": "red"}}>LEARN MORE</button>
                            </div>
                        </div>
                        <button className="imgCor-slider-button" onClick={() => setActive("SecondCard")}>&gt;</button>
                    </div>
    
                </div>

            </>
        );
    }

    function Corousal_2() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor2.jpg)", "justifyContent": "space-between", "alignItems": "center"}}>

                    <button className="imgCor-slider-button" onClick={() => setActive("FirstCard")}>&lt;</button>

                    <div style={{"height": "350px", "display": "flex", "flex-direction": "column", "alignItems": "center", "margin-top": "5%"}}>
                        <div><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "450%", "color": "graywhite"}}>We Build</span></div>
                        <div style={{"margin-top": "-5%"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "500", "font-size": "600%", "color": "red"}}>Your Dreams</span></div>
                        <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button></div>
                    </div>

                    <button className="imgCor-slider-button" onClick={() => setActive("ThirdCard")}>&gt;</button>

                </div>
            </>
        );
    }

    function Corousal_3() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor3.jpg)", "justifyContent": "space-between", "alignItems": "center"}}>

                    <button className="imgCor-slider-button" onClick={() => setActive("SecondCard")}>&lt;</button>

                    <div style={{"height": "360px", "display": "flex", "flex-direction": "column", "alignItems": "flex-start", "margin-top": "10%", "margin-left": "-25%"}}>
                        <div><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "500", "font-size": "400%", "color": "red"}}>HELPING YOU</span></div>
                        <div style={{"margin-top": "-5%"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "400%", "color": "white"}}>AND YOUR PROJECT</span></div>
                        <div style={{"margin-top": "-5%"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "400%", "color": "white"}}>BECOME BETTER</span></div>
                        <div style={{"margin-top": "-5%"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "400%", "color": "white"}}>AQUAINTED</span></div>
                        <div style={{"display": "flex", "flex-direction": "row"}}>
                            <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>MORE INFO</button></div>
                            <div style={{"margin-top": "10%", "margin-left": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "red"}}>VIEW MORE</button></div>
                        </div>
                    </div>

                    <button className="imgCor-slider-button" onClick={() => setActive("FourthCard")}>&gt;</button>

                </div>
            </>
        );
    }

    function Corousal_4() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": "url(/images/GEC-ImageCor4.jpg)", "justifyContent": "space-between", "alignItems": "center"}}>

                    <button className="imgCor-slider-button" onClick={() => setActive("ThirdCard")}>&lt;</button>

                    <div style={{"height": "350px", "display": "flex", "flex-direction": "column", "alignItems": "center", "margin-top": "5%"}}>
                        <div><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "300", "font-size": "450%", "color": "white"}}>We Build</span></div>
                        <div style={{"margin-top": "-5%"}}><span style={{"font-family": "'Montserrat', sans-serif", "font-weight": "500", "font-size": "600%", "color": "white"}}>Your Dreams</span></div>
                        <div style={{"margin-top": "10%"}}><button className="imgCor-content-area-button" style={{"background-color": "black"}}>GET STARTED</button></div>
                    </div>

                    <button className="imgCor-slider-button" onClick={() => setActive("FirstCard")}>&gt;</button>

                </div>
            </>
        );
    }

    return(
        <div>
            { Active === "FirstCard" && <Corousal_1 /> }
            { Active === "SecondCard" && <Corousal_2 /> }
            { Active === "ThirdCard" && <Corousal_3 /> }
            { Active === "FourthCard" && <Corousal_4 /> }
        </div>
    );
}

export default ImageCorousal;