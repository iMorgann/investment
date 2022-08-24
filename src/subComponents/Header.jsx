import React from "react";
import {useNavigate} from 'react-router-dom'


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const hip = () => setNavbarOpen(!navbarOpen)
  let navigate = useNavigate();
  const getstarted = (e) => {
    navigate('/Signin');
    console.log(e.target.value);
    hip("");
  }

  
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative  bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
         
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-900 uppercase font-bold"
                }
                href="/"
              >
                
               
                <span className='text-3xl text-black-600 me-1 pt-2'>
                    <ion-icon 
                        name="code-slash-outline"
                        className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " text-lg leading-lg mr-2"
                  }></ion-icon>
                </span>{" "}
                Investify
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/about"
              >
                About
                <span className="lg:hidden inline-block ml-2">About</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/contact"
              >
                Contact Us
                <span className="lg:hidden inline-block ml-2">Contact Us</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/Signup"
              >
                Create Account
                <span className="lg:hidden inline-block ml-2">Contact Us</span>
              </a>
            </li>
             <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100 hover:text-gray-300"
                    : "bg-blue-500 text-white active:bg-blue-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={getstarted}
                
              >
                 Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
