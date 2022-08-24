import React from 'react'
import { useState } from 'react'


export default function NavBar(props)  {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <> 
        <nav 
            className={
                (props.transparent
                    ? "top-0 absolute z-50 w-full"
                    : "relative  bg-white shadow-lg") +
                    "flex flex-wrap items-center justify-between px-2 py-3 "
            }
        >
            <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  '>
                    <a
                        className={
                            (props.transparent ? "text-white" : "text-gray-800") +
                            " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        }
                        href="/"
                    >
                        <ion-icon name="code-slash-outline"></ion-icon> <span>Investify</span>
                    </a>
                    <button
                        className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                        type='button'
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <ion-icon 
                        className={
                            (props.transparent ? "text-white" : "text-gray-800")
                        }
                        name="menu-outline"></ion-icon>
                    </button>

                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none " + 
                        (navbarOpen ? " block rounded shadow-lg" : "hidden")
                    }
                    id="example-navbar-warning"
                >
                    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                        <li className='flex items-center'>
                            <a 
                            className={
                                (props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800 "
                                    : "text-gray-800 hover:text-gray-600") +
                                    "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            }
                            href='/about'
                            >
                                <span className='lg:hidden inline-block ml-2'>About</span>
                            </a>
                        </li>
                        <li className='flex items-center'>
                            <a 
                            className={
                                (props.transparent
                                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800 "
                                    : "text-gray-800 hover:text-gray-600") +
                                    "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            }
                            href='/contact'
                            >
                                <span className='lg:hidden inline-block ml-2'>Contact Us</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </>
  )
}
