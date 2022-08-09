import React from 'react'
import Navbar from '../subComponents/NavBar'
import bg from '../assets/img/124.png'
import FooterSmall from '../subComponents/FooterSmall'
import {  useNavigate } from 'react-router-dom'




export default function Signonoptions () {
  let navigate = useNavigate();
  const signin = (e) => {
    navigate("/signin");
    console.log(e.target.value);
  }
  const enroll = (e) => {
    navigate("/signup");
    console.log(e.target.value);
  }

  return (


    <>
      <Navbar transparent />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-neutral-900"
            style={{
              backgroundImage:
                "url(" + {bg} + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-6  h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h3 className="text-gray-600 hover:text-green-700 text-sm font-bold">
                        WELCOME
                      </h3>
                    </div>
                    
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className='flex justify-center gap-10 px-4 lg:px-10 py-10 pt-0'>
                    
                      <button onClick={enroll} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-full'>
                        Enroll
                      </button>
                    
                    
                      <button onClick={signin} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-full'>
                        Sign On
                      </button>
                    
                      
                  </div>
                </div>  
              </div>
            </div>
            
          </div>
          
          <FooterSmall absolute />
        </section>
      </main>
    </>
  )
  
}

