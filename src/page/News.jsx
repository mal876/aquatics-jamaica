import React from 'react'

const News = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br />

      <div className="flex justify-center items-center min-h-screen p-4" >
        <div className="w-full max-w-2xl border border-black p-6 rounded-lg shadow-lg bg-white" >
        <center>
        <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
          <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
              Recent News
          </h3>
          <br />
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
            <img src="panam bulletin.jpeg" alt="" className='border border-black rounded-lg' />
            <br />
            <p className="text-gray-700 text-center font-bold">Pan Am Aquatics Bulletin February 17, 2025</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
            <img src="Awards.jpeg" alt="" className='border border-black rounded-lg' />
            <br />
            <p className="text-gray-700 text-center font-bold">Awards Ceremony - An Evening of Excellence</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
            <img src="humanitarian.jpeg" alt="" className='border border-black rounded-lg' />
            <br />
            <p className="text-gray-700 text-center font-bold">Humanitarian Award 2024</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
            <img src="panam bulletin.jpeg" alt="" className='border border-black rounded-lg' />
            <br />
            <p className="text-gray-700 text-center font-bold"> Pan Am Aquatics Bulletin January 20, 2025 </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
            <img src="panam bulletin.jpeg" alt="" className='border border-black rounded-lg' />
            <br />
            <p className="text-gray-700 text-center font-bold"> Pan Am Aquatics Bulletin January 06, 2025 </p>
          </div>
        </div>
      </center>
        </div>
      </div>
    </div>
  )
}

export default News