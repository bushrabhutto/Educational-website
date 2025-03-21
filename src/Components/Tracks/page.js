import React from 'react'
import Wrapper from '../Pages/HeroSection/Wrapper/page'


const Tracks = () => {
  return (
    <section>
<Wrapper>
<div className="md:w-[60%] bg-blue-100 md:p-6 md:m-6 shadow-lg shadow-purple-600 text-center md:ms-[300px] mb-[20px]">
    <h4 className='font-bold text-purple-600 font-mono md:text-2xl '>study plans</h4>
    <br/>
    <h2 className='font-bold text-purple-600 font-mono md:text-2xl'>Important courses</h2>
    <hr className=' text-purple-600 '/>
    <p className=' text-purple-600 font-mono md:text-2xl'>
        descriptions of courses will be given <br/> visit courses to check our <br/>
        available highly iteractive effective <br/> course which will definately change your life
    </p>
   <button className='bg-purple-600 hover:bg-yellow-400 text-gray-100 md:rounded-2xl w-[30%] h-[10%] md:p-2'> Explore our courses</button>
    </div>
<div className='flex gap-6'>


</div>
</Wrapper>
    </section>
  )
}

export default Tracks