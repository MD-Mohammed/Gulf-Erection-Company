import { render } from "@testing-library/react";
import React, {Fragment} from "react";
import NavigationBarComponent from "./NavigationBarComponent";
import './HomePage.css';

function HomePage() {

    return(
        <>
            <NavigationBarComponent/>
        </>
    );
}

export default HomePage;