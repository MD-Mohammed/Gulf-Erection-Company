import './App.css';
import React, {Fragment, useState} from 'react';
import { Routes,Route } from 'react-router-dom';

import AboutUsPage from './Components/AboutUsPage.js'
import NavigationBar from './Components/NavigationBarComponent';

function App() {

  return (
      <>

        <NavigationBar />

        <AboutUsPage />

      </>
    );
}

export default App;
