import React from 'react'
import Footer from '../subComponents/Footer';
import Nav from '../subComponents/Header';
import img from '../assets/img/musk.jpg';




const LandingPage = () => {
  
  return (
    <>
      <Nav transparent />
      <main>
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center'
          style={{
            minHeight: "75vh"
          }}>
          <div className='absolute top-0 w-full h-full bg-center bg-cover '
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80 ')"
            }}>
              <span id="blackOverlay" className='w-full h-full absolute opacity-75 bg-black'></span>

          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
                <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                  <div className='pr-12'>
                    <h1 className='text-white font-semibold text-5xl'>
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p className='mt-4 text-lg text-gray-300'>
                      Lorem ipsum dolor sit amet. Qui facilis iste qui nihil doloremque ea nemo quibusdam cum nihil assumenda et necessitatibus galisum sit voluptate necessitatibus ad quam expedita.
                    </p>
                  </div>

                </div>
            </div>

          </div>
          <div
            className='top-auto bottom-0 left right-0 w-full absolute pointer-events-none overflow-hidden '
            style={{ height: "70px" }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              viewBox='0 0 2560 100'
              x="0"
              y="0"
            >
              <polygon
                className='text-gray-300 fill-current'
                points='2560 0 2560 100 0 100'
              >

              </polygon>
              
            </svg>


          </div>

        </div>
        <section className='pb-20 bg-gray-300 -mt-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
              <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center '>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                        <ion-icon name="pie-chart"></ion-icon>
                    </div>
                    <h6 className='text-xl font-semibold '>Get Ready</h6>
                    <p classname='mt-2 mb-4 text-gray-600'>
                      Lorem ipsum dolor sit amet. Sit aliquam dolor ad autem Quis ab minus eligendi. 
                    </p>


                  </div>

                </div>

              </div>
              <div className='w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg '>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400 '>
                      <ion-icon name="logo-gitlab"></ion-icon>
                    </div>
                    <h6 className='text-xl font-semibold'>Invest</h6>
                    <p className='mt-2 mb-4 text-gray-600'>Lorem ipsum dolor sit amet. Sit aliquam dolor ad autem Quis ab minus eligendi.</p>

                  </div>

                </div>

              </div>
              <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 breakwords bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                      <ion-icon name="finger-print"></ion-icon>
                    </div>
                    <h6 className='text-xl font-semibold'>Secured</h6>
                    <p className='mt-2 mb-4 text-gray-600'>Lorem ipsum dolor sit amet. Sit aliquam dolor ad autem Quis ab minus eligendi.</p>
                  </div>
                </div>

              </div>


            </div>
            <div className='flex flex-wrap items-center mt-32'>
              <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
                  <ion-icon name="people"></ion-icon>
                </div>
                <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className='text-lg font-light leading-relaxed mt-4 text-gray-700 '>
                  Lorem ipsum .
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi repellat beatae magnam aliquid vel sequi obcaecati, soluta dignissimos adipisci cum magni nihil fugiat nam facere quae mollitia, ratione quibusdam.
                </p>
                <a
                  href='#'
                  className='font=bold text-gray-800 mt-8'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
              </div>
              <div className='w-full md:w-4/12 px-4 mr-auo ml-auto'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600'>
                  <img 
                    alt="..."
                    src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    className='w-full align-middle rounded-t-lg'
                  />
                  <blockquote className='relative p-8 mb-4'>
                    <svg 
                      preserveAspectRatio='none'
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox='0 0 583 95'
                      className='absolute left-0 w-full block'
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points='-30,95 583,95 583,65'
                        className='text-blue-600 fill-current'
                      >
                        
                      </polygon>

                    </svg>
                    <h4 className='text-xl font-bold text-white'>
                      World Class Services
                    </h4>
                    <p className='text-md font-light mt-2 text-white'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolores illum sequi repellendus accusamus numquam hic. Exercitationem vitae quis, aspernatur ratione dolores consequuntur ipsa esse praesentium? Repudiandae, nostrum. Ex, veniam!
                    </p>
                  </blockquote>
                </div>

              </div>
            </div>

          </div>
          

        </section>

        <section className='relative py-20'>
          <div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
           style={{ height:"80px"}}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className='text-white fill-current'
                points='2560 0 2560 100 0 100'>

              </polygon>

              
            </svg>

          </div>
          <div className='container mx-auto px-4'>
              <div className='items-center flex flex-wrap'>
                  <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
                      <img 
                        alt="..."
                        className='max-w-full rounded-lg shadow-lg'
                        src='https://images.unsplash.com/photo-1653393139359-b6743b96c4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                      />
                  </div>
                  <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                      <div className='md:pr-12'>
                          <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300'>
                            <ion-icon className='text-xl' name="rocket"></ion-icon>
                          </div>
                          <h3 className='text-3xl font-semibold'>
                            A growing portfolio
                          </h3>
                          <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea adipisci, velit laudantium quaerat dignissimos aliquid reprehenderit cumque est molestiae saepe rerum maiores aspernatur minima eveniet modi deserunt alias aliquam.
                          </p>
                          <ul className='list-none mt-6'>
                              <li className='py-2'>
                                <div className='flex items-center'>
                                  <div>
                                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3'>
                                      <ion-icon name="finger-print"></ion-icon>
                                    </span>
                                  </div>
                                  <div>
                                    <h4 className='text-gray-600'>
                                      Secured
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              <li className='py-2'>
                                <div className='flex items-center'>
                                  <div>
                                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3'>
                                      <ion-icon name="bar-chart"></ion-icon>
                                    </span>
                                  </div>
                                  <div>
                                    <h4 className='text-gray-600'>
                                      Auto Trade With MT4
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              <li className='py-2'>
                                <div className='flex items-center'>
                                  <div>
                                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3'>
                                      <ion-icon name="checkmark-done"></ion-icon>
                                    </span>
                                  </div>
                                  <div>
                                    <h4 className='text-gray-600'>
                                      Trusted
                                    </h4>
                                  </div>
                                </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </section>



        <section className='pt-20 pb-48'>
          <div className='container mx-auto px-4'>
              <div className='flex flex-wrap justify-center text-center mb-24'>
                  <div className='w-full lg:w-6/12 px-4'>
                      <h2 className='text-4xl font-semibold'>
                        Meet Our Team
                      </h2>
                      <p className='text-lg leading-relaxed m-4 text-gray-600'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium reiciendis sint culpa voluptatum, debitis repellendus consectetur deserunt dolores minima, totam, sequi fugiat neque doloribus deleniti excepturi ab sunt cupiditate!
                      </p>
                  </div>
              </div>
              <div className='flex flex-wrap'>
                  <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 '>
                      <div className='px-6'>
                        <img 
                          alt='...'
                          src={img}
                          className='shadow-lg rounded-full max-w-full mx-auto'
                          style={{ maxwidth: "120px" }}
                        />
                        <div className='pt-6 text-center'>
                          <h5 className='text-xl font-bold'>
                            Elon Musk
                          </h5>
                          <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                            CEO
                          </p>
                          <div className='mt-6'>
                            <button
                              className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                              type='button'
                            >
                              <ion-icon name="logo-twitter"></ion-icon>
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Elon Musk
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-google"></ion-icon>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-twitter"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Elon Musk
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-google"></ion-icon>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-twitter"></ion-icon>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-instagram"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={img}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Elon Musk
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-google"></ion-icon>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-twitter"></ion-icon>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <ion-icon name="logo-instagram"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

        </section>

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
};

export default LandingPage