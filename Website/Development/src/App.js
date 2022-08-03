import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader"

import ServicePage from './Components/ServicePage.js'
import ImageSlider from './Components/ImageSliderComponent.js';
import AboutUsPage from './Components/AboutUsPage.js'
import NavigationBar from './Components/NavigationBarComponent.js';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

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
                <NavigationBar />
              </div>

              <ImageSlider />

              <AboutUsPage/>

              <ServicePage/>

            </>

      }

    </>

  );
}

export default App;
