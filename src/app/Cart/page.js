'use client';

import React from 'react';
import { useModule } from '@/Components/ModuleContext/page';

const Cart = () => {
  const { state, dispatch } = useModule();
  const selected = state.selectedModule;

  return (
    <div className="mt-6 p-6 bg-white border border-gray-300 rounded-2xl shadow-xl w-full max-w-xl">
      {selected ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold text-green-700 mb-3">Your Cart</h2>
          <h2 className="text-2xl font-bold text-blue-800 mb-3">{selected.title}</h2>
          <p className="text-gray-700 mb-2"><strong>Description:</strong> {selected.fullDesc}</p>
          <p className="text-gray-700 mb-2"><strong>Duration:</strong> {selected.duration}</p>
          <p className="text-gray-700 mb-2"><strong>Price:</strong> {selected.price}</p>
        </div>
      ) : (
        <div className="text-gray-600 mb-6">Select a module to view details.</div>
      )}

   
      {state.cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-3 mt-4">
          {state.cart.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-blue-200 rounded-xl flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-blue-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: index })}
                className="bg-red-600 text-white text-sm px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-3 text-right">
            <p className="font-semibold text-lg text-green-700">
              Total Price: ₹{state.totalPrice}
            </p>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-2 bg-black text-white px-4 py-2 text-sm rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
