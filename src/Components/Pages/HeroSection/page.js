import React from 'react';
import Wrapper from './Wrapper/page';
import herosecimg from '../../assests/herosectimg.png'; // spelling fixed from assests → assets
import Image from 'next/image';
import Button from '@/Components/Buttons/page';

const HeroSection = () => {
  return (
    <section className="bg-blue-100 mt-8 py-8 shadow-lg shadow-yellow-300 ">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="md:w-2/2">
            <h4 style={{textShadow:"2px 2px 4px rgba(0,0,0,0.5)"}} className="text-2xl font-bold text-pink-600 mb-4 border-b-2  border-pink-500 inline-block">
              Getting Education with Latest Trends
            </h4>
            <p className="text-red-400 text-base md:text-lg leading-relaxed mb-4">
              In today’s fast-paced digital world, education is evolving rapidly with the latest trends and technologies. From online learning platforms to interactive virtual classrooms, modern education is more accessible and flexible than ever before. Incorporating tools like AI, augmented reality, and personalized learning systems helps students gain deeper knowledge and real-world skills. Staying updated with these trends not only enhances learning experiences but also prepares students for the dynamic demands of the future workforce.
            </p>
           <Button learn="learn more"/>
          </div>

          {/* Image Section */}
          <div className="md:w-2/2">
            <Image
              src={herosecimg}
              alt="Hero section image"
              className="rounded-lg shadow-md w-half h-auto"
              priority
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
