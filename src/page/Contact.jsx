import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />

      <center>
        <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
          <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
            How to contact us
          </h3>
          <br />
          <p className='p-3 font-semibold text-left text-lg'>
           Aquatic Sports Association of Jamaica <br /><br />
            P.O. Box 15 <br /><br />
            Kingston 10 <br /><br />
            Jamaica <br /><br />

            Phone :(876) 920-6229 or 920-6230 <br /><br />
            Fax: (876) 920-6129 <br /><br />

            Administration: aquaticsja@gmail.com
          </p>
        </div>
      </center>
      <br /><br /><br /><br />

      <Footer/>
    </div>
  )
}

export default Contact