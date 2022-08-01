import { render } from "@testing-library/react";
import React, {Fragment} from "react";

function SampleComponent() {

    function DesktopComponent() {


    return(
        <>

            <div>Hello from Desktop</div>

        </>
    );
} 

function MobileComponent() {


    return(
        <>

            <div>Hello from Mobile</div>

        </>
    );
}

const width = window.innerWidth;
const breakpoint = 500;

return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}
export default SampleComponent;