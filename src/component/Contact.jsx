import React from 'react'

function Contact() {
  return (
   <>   
     <div className=' flex  items-cente h-[30vw] w-[50%] justify-center  m-auto my-5 '>
              <div className='first-box  flex w-[45%] h-[16vw] m-auto  ml-9 mr-1 bg-gray-100 justify-center rounded-xl flex-wrap'>
                  <div className='w-full'>
                      <div className='header flex items-center justify-center  font-bold text-4xl m-3' >Get in touch:</div>
                      <div className=' items-center justify-center font-medium' style={{textAlign:"center"}}> Fill in thw firm to start a conversation </div>
                      <div className='flex m-auto items-center w-full ml-4'style={{}} >
                          <span className='flex m-2 mt-5 mr-7'> <svg
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      className="w-8 h-8 text-gray"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                      />
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5"
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                  </svg></span>
                          <span className='flex mt-3 font-medium w-[60%]  h-[5vh]  justify-start p-1'>F-704 Shilpan Reva Umasadan Road , University Road </span>
                      </div>
                      <div className='flex ml-4 mt-5'>
                          <span className='flex m-2  mr-6'><svg
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      className="w-8 h-8 text-black"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                      />
                                  </svg> </span>
                          <span className='flex mt-3 font-medium justify-start w-[60%] '>+918401605624</span>
                      </div>
                      <div className='flex ml-4 mt-5'>
                      <span className='flex m-2 mr-6'> <svg
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      className="w-8 h-8 text-black"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      />
                                  </svg></span>
                          <span className='flex mt-3 font-medium'>jaydeep6624@gmail.com</span>
                      </div>
                    
                  </div>
              </div>
              <div className='second boxr w-[45%] h-[16vw] m-auto mr-9 flex-wrap'>
                  <div>
                  <input type="text" className=' h-8 w-[15vw]  border border-gray-500 ml-4 mt-5 p-5 block rounded-xl' placeholder='Full Name' onSelect="none"/></div>
                  <div>
                  <input type="text" className=' h-8 w-[15vw] border border-gray-500 ml-4 mt-5 p-5 block rounded-lg ' placeholder='Email' onSelect="none"/></div>
                  <div>
                  <input type="text" className=' h-8 w-[15vw] border border-gray-500 ml-4 mt-5 p-5 block rounded-lg ' placeholder='Telephone Number ' onSelect="none"/></div>
                  <div className=''>
                  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none m-5 ml-4 w-32">submit</button>
              </div>
              </div>
            
          </div>
   
   
   
   
   
   
   </>
  )
}
       

export default Contact
