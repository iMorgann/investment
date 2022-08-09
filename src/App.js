import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';


import LandingPage from './Components/LandingPage';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import About from './Components/About';
import Option from './Components/signonoptions';
import { ProfileSetup } from './Components/ProfileSetup';
import './App.css';

function App() {
  return (
     <BrowserRouter>
      <Routes>
      
        <Route  path='/' element={<LandingPage />} />
        <Route  path='Signin' element={<Signin />} />
        <Route  path='SignUp' element={<Signup />} />
        <Route  path='About' element={<About />} />
        <Route  path='Contact' element={<Contact />} />
        <Route path='option' element={<Option />} />
        <Route path='Profile' element={<ProfileSetup />} />
        

      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
