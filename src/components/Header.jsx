import React from 'react';
import Logo from '../assets/Logo.svg';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo or Name */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Gui Oba Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-gray-800">Gui Oba</span>
        </div>

        {/* Right: Tagline or Call-to-Action */}
        <div className="mt-2 md:mt-0 text-center md:text-right">
          {new Date().getFullYear()} {new Date().getMonth()+1} {new Date().getDate()} 
        </div>
      </div>
    </header>
  );
}
