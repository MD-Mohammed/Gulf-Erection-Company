import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";
import { Routes,Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './ImageCorousal.css';

function ImageCorousal() {

    const [Img, setImg] = useState("url(/images/GEC-Image4.jpg)");

    const Navigate = useNavigate();

    const LeftImage = () => {
        Navigate("/");
    }

    const RightImage = () => {
        Navigate("/Home/Corousal2");
    }

    function Corousal_1() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": {Img}['Img']}}>
    
                    <div className="imgCor-left-container">
                        <button className="imgCor-slider-button" onClick={LeftImage}>&lt;</button>
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
                        <button className="imgCor-slider-button" onClick={RightImage}>&gt;</button>
                    </div>
    
                </div>

            </>
        );
    }

    function Corousal_2() {
        return(
            <>
                <div className="imgCor-main-container" style={{"backgroundImage": {Img}['Img']}}>
    
                    <div className="imgCor-left-container">
                        <button className="imgCor-slider-button" onClick={LeftImage}>&lt;</button>
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
                                <button className="imgCor-content-area-button" style={{"margin-left": "10%","background-color": "green"}}>LEARN MORE</button>
                            </div>
                        </div>
                        <button className="imgCor-slider-button" onClick={RightImage}>&gt;</button>
                    </div>
    
                </div>
                
            </>
        );
    }

    return(
        <div>
            <Routes>
    
                <Route path="/" element={<Corousal_1 />} />
                <Route path="/Home/Corousal2" element={<Corousal_2 />} />
            
            </Routes>
        </div>
    );
}

export default ImageCorousal;