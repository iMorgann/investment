import React from 'react'
import Nav from '../subComponents/Header';
import Footer from '../subComponents/Footer';

export default function  Contact () {
  return (
    <>
      <Nav transparent/>
      <main>
        <section className='pb-20 relative block bg-gray-900'>
          <div
            className='bottom-auto top-0 left-0 right-0 w-full absolute'
            style={{ height: "80px" }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='https://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version="1.1"
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-gray-900 fill-current'
                points='2560 0 2560 100 0 100'
              >

              </polygon>

            </svg>
          </div>

          <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
            <div className='flex flex-wrap text-center justify-center'>
              <div classname='w-full lg:w-6/12 px-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    Lorem ipsum dolor 
                  </h2>
                  <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500 '>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ratione nemo blanditiis sequi at voluptatem animi soluta quia omnis dolor repudiandae libero quos deserunt quo hic aspernatur quasi, laboriosam quam.
                  </p>
              </div>
            </div>
            <div className='flex flex-wrap mt-12 justify-center'>
                <div className='w-full lg:w-3/12 px-4 text-center'>
                    <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                      <ion-icon name="medal"></ion-icon>
                    </div>
                    <h6 className='text-xl mt-5 font-semibold text-white'>
                      Lorem ipsum, dolor
                    </h6>
                    <p className='mt-2 mb-4 text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt soluta, libero dolores accusantium enim animi deleniti veniam voluptatem. Vel mollitia quo dolor nihil obcaecati distinctio dolorum. Vitae odio voluptatem quibusdam!
                    </p>
                </div>
           
                <div className='w-full lg:w-3/12 px-4 text-center'>
                    <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                      <ion-icon name="bulb"></ion-icon>
                    </div>
                    <h6 className='text-xl mt-5 font-semibold text-white'>
                      Lorem ipsum, dolor
                    </h6>
                    <p className='mt-2 mb-4 text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt soluta, libero dolores accusantium enim animi deleniti veniam voluptatem. Vel mollitia quo dolor nihil obcaecati distinctio dolorum. Vitae odio voluptatem quibusdam!
                    </p>
                </div>
                <div className='w-full lg:w-3/12 px-4 text-center'>
                    <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                      <ion-icon name="bar-chart"></ion-icon>
                    </div>
                    <h6 className='text-xl mt-5 font-semibold text-white'>
                      Lorem ipsum, dolor
                    </h6>
                    <p className='mt-2 mb-4 text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt soluta, libero dolores accusantium enim animi deleniti veniam voluptatem. Vel mollitia quo dolor nihil obcaecati distinctio dolorum. Vitae odio voluptatem quibusdam!
                    </p>
                </div>
            </div>
          </div>

        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Contact Us
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
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
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}
