import React from 'react'
import { Link } from 'react-router-dom'


import './Home.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'


const eventsData = [
  {
    title: "ASAJ High Schools/Tertiary Institutions Championships",
    date: "Feb 21, 2025",
  },
  {
    title: "Walter Rogers Age Group National Championships",
    date: "Mar 4, 2025 - Mar 10, 2025",
  },
  {
    title: "2025 Mayberry High Performance Swim Classic (Secondary/Tertiary)",
    date: "Mar 21, 2025",
  },
  {
    title: "2025 Mayberry High Performance Swim Classic (Prep/Primary)",
    date: "Mar 22, 2025",
  }
];


const Home = () => {
  return (
   <div>
     <section className='w-full'>
         <br /><br /><br /> <br /><br /><br /> <br />
         <div className='  md:items-center md:text-left sm:max-xl-p-9'>
           <div className='box leading-normal p-4 '>
              <h1 className='text-5xl  text-white font-bold text-center tracking-tight'>
                Welcome to The
              </h1> <br />
              <h1 className='text-5xl  text-white font-bold text-center tracking-tight'>
                 Aquatic Sports Association
              </h1> <br />
              <h1 className='text-5xl text-white font-bold text-center tracking-tight'>
                 of Jamaica
              </h1>
              <br /><br />
              <div>
                <center>
                    <button className=' w-40 border text-white font-bold w-28 shadow-xl  py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                        <Link to ='/contact'>
                          Contact Us
                        </Link>
                    </button>
                </center>
              </div>
            </div>
         </div>
     </section>
     <div className="bg-white py-10">
        <div className="md:items-center md:text-left p-5">
          <div>
            <h4 className="text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800">
              What's New?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              
              <div className="flex justify-center">
                <div className="bg-sky-500 p-4 rounded-lg">
                  <img src="Awards.jpeg" alt="Awards" className="rounded-lg" />
                </div>
              </div>

              
              <div className="flex justify-center">
                <div className="bg-red-500 p-4 rounded-lg">
                  <img src="humanitarian.jpeg" alt="Humanitarian" className="rounded-lg" />
                </div>
              </div>
            </div>

            
            <div className="flex justify-center mt-8">
              <Link to='/news'>
                <button className="border text-white font-bold w-28 shadow-xl p-2 rounded-md transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className='w-full'>
        <center>
          {/* <img src="asaj-swimming_XL.jpg" alt="" className='rounded-lg shadow-lg w-full max-w-5xl' /> */}

          <ImageSlider/>
        </center>
      </div>
      <br /><br />
      <center>
      <div className="flex justify-center items-center min-h-screen p-4">
      
        <div className="w-full max-w-2xl border border-black p-6 rounded-lg shadow-lg bg-white">
          
          <h4 className="text-4xl font-semibold text-center tracking-light underline underline-offset-8 decoration-2 decoration-solid decoration-green-800">
            Upcoming Events
          </h4>

          
          <div className="flex flex-col space-y-6 mt-6">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="border border-gray-300 shadow-md p-4 rounded-md transition-transform duration-300 hover:translate-x-3 bg-gray-50"
              >
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-base font-semibold text-gray-700">{event.date}</p>
              </div>
            ))}
          </div>

          
          <div className="flex justify-center mt-8">
            <Link to="/events">
              <button className="border border-green-700 bg-green-700 text-white font-bold w-44 p-2 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                See More
              </button>
            </Link>
          </div>
        </div>
     </div>
      </center>
      <br /><br /><br /><br />


      <Footer/>
   </div>
 )
}

export default Home