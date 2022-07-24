import './App.css';
import React, {Fragment, useState} from 'react';
import { Routes,Route } from 'react-router-dom';

import HomePage from './Components/HomePage.js'
import ContactPage from './Components/ContactPage';


function App() {

  return (

    <div>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </div>

    );
}

export default App;
