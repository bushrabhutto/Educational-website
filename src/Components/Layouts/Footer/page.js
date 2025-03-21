'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-gray-800 py-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">Educational Website</h2>
          <p className="text-sm text-gray-700">Empowering learners with high-quality courses and practical skills.</p>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/courses" className="hover:text-red-500">Courses</Link></li>
            <li><Link href="/cart" className="hover:text-red-500">Cart</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-red-500">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-black" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-black" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-black" /></a>
            <a href="mailto:info@educational.com" aria-label="Email"><Mail className="w-5 h-5 hover:text-black" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-6 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Educational Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
