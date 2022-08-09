import React from 'react'
import Navbar from '../subComponents/NavBar'
import bg from '../assets/img/124.png'
import FooterSmall from '../subComponents/FooterSmall'
import {ParticleComponent} from '../subComponents/ParticleComponent';





export default function Signin () {
  
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
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h3 className="text-gray-600 text-sm font-bold">
                        LOGIN
                      </h3>
                    </div>
                    
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                        <div className="w-1/2">
                            <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                className="text-blue-500"
                            >
                              <small>Forgot password?</small>
                            </a>
                        </div>
                        <div className="w-1/2 ">
                          <a
                            href="/Signup"
                            
                            className="text-gray-900"
                          >
                            <bold>Sign up?</bold>
                          </a>
                        </div>
                        
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
