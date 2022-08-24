import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';


import LandingPage from '../Components/LandingPage';
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import Contact from '../Components/Contact';
import About from '../Components/About';
import { ProfileSetup } from '../Components/ProfileSetup';
import Dashboard from '../Components/Dashboard';
import Bonds from '../Components/Dashboard/Bonds';
import Crypto from '../Components/Dashboard/Crypto';
import FX from '../Components/Dashboard/FX';
import News from '../Components/Dashboard/News';
import Portfolio from '../Components/Dashboard/Portfolio';
import Settings from '../Components/Dashboard/Settings';
import Stocks from '../Components/Dashboard/Stocks';



const  AllPages = () => {
  return (
     <BrowserRouter>
      <Routes>
      
        <Route  path='/' element={<LandingPage />} />
        <Route  path='Signin' element={<Signin />} />
        <Route  path='SignUp' element={<Signup />} />
        <Route  path='About' element={<About />} />
        <Route  path='Contact' element={<Contact />} />
        <Route path='Profile' element={<ProfileSetup />} />
        <Route path='Dashboard' element= {<Dashboard />} />
        <Route path='Bonds' element= {<Bonds />} />
        <Route path='Crypto' element= {<Crypto />} />
        <Route path='Fx' element= {<FX />} />
        <Route path='News' element= {<News />} />
        <Route path='Portfolio' element= {<Portfolio />} />
        <Route path='Settings' element= {<Settings />} />
        <Route path='Stocks' element= {<Stocks />} />

        

      </Routes>
      
      
    </BrowserRouter>
  );
}

export default AllPages;
