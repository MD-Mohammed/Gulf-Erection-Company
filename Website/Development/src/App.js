import './App.css';
import React, {Fragment, useState, useEffect, useRef} from 'react';
import { Routes,Route } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader"

import ServicePage from './Components/ServicePage.js'
import ImageSlider from './Components/ImageSliderComponent.js';
import AboutUsPage from './Components/AboutUsPage.js'
import NavigationBar from './Components/NavigationBarComponent';
import ClientPage from './Components/ClientPage';
import ProjectPage from './Components/ProjectPage';
import ContactPage from './Components/ContactPage';
import FooterComponent from './Components/FooterComponent';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  const ScrollToAboutus = useRef();

  return (

    <>

      {
        loading ?

          <div className="loader-style">
            <HashLoader 
              size={50}
              color="#FF4343"
              loading={loading}
            />
          </div>

          :
        
            <>
          
              <div className="navigationbar-position">
                <NavigationBar/>
              </div>

              <ImageSlider />

              <AboutUsPage/>

              <ServicePage/>
             
              <ClientPage />

              <ProjectPage />

              <ContactPage />

              <FooterComponent />

            </>

      }

    </>

  );
}

export default App;
