import React, {Fragment} from "react";

function FooterComponent() {

    return(
        <>
            <div style={{"height": "100px", "background-color": "rgba(5, 5, 5, 0.9)0, 0, 0)"}} />
            <div style={{"height": "125px", "background-color": "black", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"}} >
                <p style={{"color": "gray"}}>©2018 Gulf Erection</p>
                <p style={{"color": "gray"}}>Designed by <span style={{"color": "red"}}>Mohammed</span></p>
            </div>
        </>
    );
}

export default FooterComponent;