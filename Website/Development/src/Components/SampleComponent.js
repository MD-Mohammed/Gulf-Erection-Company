import { render } from "@testing-library/react";
import React, {Fragment, useState} from "react";

function SampleComponent() {

    function MobileComponent() {

        return(
            <>
    
            </>
        );
    } 

    function DesktopComponent() {

        return(
            <>
    
            </>
        );

    } 

    const width = window.innerWidth;
    const breakpoint = 500;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
} 

export default SampleComponent;