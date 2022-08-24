import React from 'react'

export default function SideNavBar () {
  return (
    <>
        <div className='h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80'>
            <div className='bg-white h-full rounded-2xl dark:bg-gray-700'>
                <div className='flex items-center justify-center pt-6'>
                    <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                      <defs>
                        <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                            <stop stopColor='#FF0057' stopOpacity="0.16" offset="0%">
                            </stop>
                            <stop stopColor='#FF0057' offset="86.1354%">
                            </stop>
                        </linearGradient>
                      </defs>  
                      <g>
                        <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                        </path>
                        <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                        </circle>
                        <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                        </circle>
                      </g>
                    </svg>
                </div>
                <nav className='mt-6'>
                    <div>
                        <a className='w-full font-thin uppercase text-blue-500 flex items-center p-4  transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4  '
                        href='/Dashboard'>
                            <span className='text-left text-2xl'>
                                
                                <ion-icon size="small" name="home-outline"></ion-icon>
                            </span>
                            <span className='mx-4 text-sm font-normal'>
                                Dashboard
                            </span>
                        </a>
                        <a className='w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500 '
                        href='/Portfolio'>
                            <span className='text-left text-2xl'>
                                <ion-icon size="small" name="briefcase-outline"></ion-icon>
                            </span>
                            <span className='mx-4 text-sm font-normal'>
                                Portfolio
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/Stocks">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="bar-chart-outline"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Stocks
                            </span>
                            
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/Fx">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="logo-usd"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                FX
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/Bonds">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="document-text-outline"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Bonds
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/Crypto">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="logo-bitcoin"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Crypto
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/NFT">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="logo-apple-ar"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                NFT
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/News">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="newspaper-outline"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                News
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="/Settings">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="settings-outline"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Settings
                            </span>
                        </a>
                        <a class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4  transition-colors duration-200 justify-start hover:text-blue-500" 
                        href="Logout">
                            <span class="text-left text-2xl">
                                <ion-icon size="small" name="settings-outline"></ion-icon>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Logout
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}
