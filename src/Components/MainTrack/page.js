import React from 'react'

import Image from 'next/image'
import frontend from '../assests/frontend-img-1.jpeg'
import backend from '../assests/backend.jpg'
import host from '../assests/host.jpg'


import FAQ from '../Faqques/page'

const MainTrack = () => {
  return (
    <section>

<div className='m-10 flex'>


<FAQ/>


  <div className="mt-6 p-6 rounded-2xl md:basis-1/2 text-xl font-bold">
  <div className="flex items-center gap-4  bg-white p-4 rounded-xl shadow-md md:w-[300px]">
    <div className="w-20 rounded-2xl">
      <Image src={frontend} alt="course" />
    </div>
    <div className="text-left font-normal">
      <h3 className="text-lg font-bold">Frontend Development</h3>
      <p className="text-sm text-gray-600">
        Learn HTML, CSS, JavaScript, React.js, Next.js
      </p>
    </div>
  </div>
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md w-[300px] m-2">
        <div className="w-20 rounded-2xl">
          <Image src={backend} alt="Backend" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Backend Development</h3>
          <p className="text-sm text-gray-600">
            Learn Node.js, Express.js, MongoDB, API integration
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md w-[300px] m-2">
        <div className="w-20">
          <Image src={python } alt="python " />
        </div>
        <div>
          <h3 className="font-bold text-lg">Backend Development</h3>
          <p className="text-sm text-gray-600">
            Learn  python for Backend Development
          </p>
        </div>
      </div>
        {/* Card 3 - Full Stack */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md w-[300px] m-2">
        <div className="w-20">
          <Image src={host} alt="Fullstack" />
        </div>
        <div>
          <h3 className="font-bold text-lg"> Deployment</h3>
          <p className="text-sm text-gray-600">
            Learn Frontend + Backend  cloud hosting Deployments
          </p>
        </div>
      </div>
       
</div>

</div>
  
    </section>
  )
}

export default MainTrack