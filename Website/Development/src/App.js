import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader"

import ServicePage from './Components/ServicePage.js'
import ImageSlider from './Components/ImageSliderComponent';
import AboutUsPage from './Components/AboutUsPage.js'
import NavigationBar from './Components/NavigationBarComponent';
import ClientPage from './Components/ClientPage';
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
              size={100}
              color="#FF4343"
              loading={loading}
            />
          </div>

          :
        
            <>

              
              <ClientPage />

            </>

      }

    </>

  );
}

export default App;
