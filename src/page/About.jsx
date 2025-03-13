import React from 'react'
import './About.css'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <center>
        <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
          <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
            About
          </h3>
          <br />
          <p className='p-3 font-normal text-right text-lg'>
          The Aquatic Sports Association of Jamaica (ASAJ) is the governing body for aquatics in Jamaica. <br /> 
          The Association is affiliated with World Aquatics (AQUA) which is the international federation recognised by <br /> 
          the International Olympic Committee for administering international competition in aquatic sports. <br /> 
          Several ASAJ officials are AQUA certified.Regional affiliations include Central American and Caribbean Amateur Swimming Federation (CCCAN) <br /> 
          and PanAm Aquatics (PAQ).
          </p>
          <br />
          <p className='p-3 font-normal text-left text-lg'>
             The Association comprises several disciplines, namely: <br />

             ~ Competitive Swimming <br />
             ~ Artistic Swimming <br />
             ~ Water Polo <br />
             ~ Masters’ Swimming <br />
             ~ Diving <br />
             ~ Open Water Swimming <br /> 
          </p>
        </div>
        <br /><br />
        <div className='border border-white rounded-lg  md:items-center md:text-left sm:max-xl-p-9'>
          <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
            Leadership
          </h3>
          <br />
          <p className='p-3 font-normal text-center text-lg'>
            President (Diving) – Lance Rochester <br /> <br />

            Vice President (Swimming) – Hilary Brown Nixon <br /> <br />

            Vice President (Artistic Swimming) – Robyn-Ann Chin Sang <br /> <br />

            Vice President (Water Polo) – Marlon McIntyre <br /> <br />

            Secretary – Florence Grizzle-Williams <br /> <br />

            Treasurer – Richard Hopkins <br /> <br />

            Assistant Secretary/Treasurer – Michelle Parker <br /> <br />
          </p>
          <br /><br />
          <h3 className='text-4xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
            Our Committee Members
          </h3>
          <br /><br />
          <center>
            <button className=' font-bold rounded-3xl w-64 text-white shadow-xl p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
              <a href='/asaj-committees.pdf'>
                ASAJ 2024 - 2025 Standing Committee Members
              </a>
              </button>
          </center>
        </div>
      </center>
      <br />
      <br />

      <Footer />
      
    </div>
  )
}

export default About