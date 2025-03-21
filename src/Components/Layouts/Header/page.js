'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Wrapper from '@/Components/Pages/HeroSection/Wrapper/page';
import Image from 'next/image';
import logoHead from '../../assests/logohead.png';
import { Home, BookOpen, Info, FileText, ShoppingCart } from 'lucide-react';
import { useModule } from '@/Components/ModuleContext/page'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { state } = useModule(); 

  return (
    <Wrapper>
      <header className="bg-pink-200 p-4 flex justify-between items-center px-3 relative shadow-lg shadow-red-300">
        <div className="logo font-bold text-2xl text-red-400 flex gap-1 items-center">
          <Image src={logoHead} alt="logo" className="w-[80px] h-[50px] rounded-2xl" />
          <span>Educational-Website</span>
        </div>

      
        <ul className="hidden md:flex items-center">
          <li className="inline-block mx-2">
            <Link href="/" className="text-red-500 inline-flex items-center gap-1">
              <Home className="w-5 h-5 text-red-500" /> Home
            </Link>
          </li>
          <li className="inline-block mx-2">
            <Link href="/About" className="text-red-500 inline-flex items-center gap-1">
              <Info className="w-5 h-5 text-red-500" /> About
            </Link>
          </li>
          <li className="inline-block mx-2">
            <Link href="/Courses" className="text-red-500 inline-flex items-center gap-1">
              <BookOpen className="w-5 h-5 text-red-500" /> Courses
            </Link>
          </li>
          <li className="inline-block mx-2">
            <Link href="/Blogs" className="text-red-500 inline-flex items-center gap-1">
              <FileText className="w-5 h-5 text-red-500" /> Blogs
            </Link>
          </li>
          <li className="inline-block mx-2 relative">
            <Link href="/Cart" className="text-red-500 inline-flex items-center gap-1 relative">
              <ShoppingCart className="w-5 h-5 text-red-500" /> Cart
              {state.cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 rounded-full">
                  {state.cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

  
        <div className="md:hidden text-3xl text-red-500 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-pink-100 shadow-md z-50 md:hidden px-4 py-3">
            <ul className="space-y-3 font-medium">
              <li><Link href="/" onClick={toggleMenu} className="block text-blue-500">Home</Link></li>
              <li><Link href="/About" onClick={toggleMenu} className="block text-blue-500">About</Link></li>
              <li><Link href="/Courses" onClick={toggleMenu} className="block text-blue-500">Courses</Link></li>
              <li><Link href="/Blogs" onClick={toggleMenu} className="block text-blue-500">Blogs</Link></li>
              <li className="relative">
                <Link href="/Cart" onClick={toggleMenu} className="block text-blue-500 relative">
                  Cart
                  {state.cart.length > 0 && (
                    <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-1.5 rounded-full">
                      {state.cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </Wrapper>
  );
};

export default Header;
