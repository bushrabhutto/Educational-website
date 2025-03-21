"use client";

import React from 'react';
import { useModule } from '@/Components/ModuleContext/page';

const Courses= () => {
  const { state, dispatch } = useModule();

  const handleBuyNow = (module) => {
    dispatch({ type: "SELECT_MODULE", payload: module });
    dispatch({ type: "ADD_TO_CART", payload: module });
  };

  return (
    <div className='flex flex-wrap gap-4'>
      {state.modules.map((module) => (
        <div key={module.id} className='p-4 bg-blue-200 rounded-xl shadow-lg w-64'>
          <h3 className='font-bold text-blue-800 text-lg'>{module.title}</h3>
          <p className='text-sm text-blue-700'>{module.shortDesc}</p>
          <p className='text-xs mt-1 text-gray-600'>{module.duration}</p>
          <p className='text-sm font-semibold text-green-700'>{module.price}</p>
          <button
            onClick={() => handleBuyNow(module)}
            className='bg-red-600 text-white mt-3 px-3 py-1 font-bold rounded'
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
