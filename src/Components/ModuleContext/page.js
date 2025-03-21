'use client';

import { createContext, useContext, useReducer } from 'react';
import { ModulesArr } from '../Modulesfolder/page';

const ModuleContext = createContext();

const initialState = {
  selectedModule: null,
  modules: ModulesArr,
  cart: [],
  totalPrice: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_MODULE':
      return { ...state, selectedModule: action.payload };

    case 'ADD_TO_CART': {
      const alreadyInCart = state.cart.some(item => item.id === action.payload.id);
      if (alreadyInCart) return state;
      const updatedCart = [...state.cart, action.payload];
      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + parseInt(item.price.replace('₹', '')),
        0
      );
      return { ...state, cart: updatedCart, totalPrice: updatedPrice };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cart.filter((_, index) => index !== action.payload);
      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + parseInt(item.price.replace('₹', '')),
        0
      );
      return { ...state, cart: updatedCart, totalPrice: updatedPrice };
    }

    case 'CLEAR_CART':
      return { ...state, cart: [], totalPrice: 0 };

    default:
      return state;
  }
};

export const ModuleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModuleContext.Provider value={{ state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  );
};

export const useModule = () => {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return context;
};
