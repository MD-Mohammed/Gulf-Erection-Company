import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import NavigationBarComponent from "./NavigationBarComponent";
import ImageCorousal from "./ImageCorousal";
import './HomePage.css';

function HomePage() {

    return(
        <>
            <NavigationBarComponent/>
            <ImageCorousal />
        </>
    );
}

export default HomePage;