import React from 'react';
import Logo from '../assets/Logo.svg';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2 group">
          <img src={Logo} alt="Gui Oba Logo" className="h-10 w-10" />

          {/* Name wrapper */}
          <span className="relative inline-grid overflow-hidden text-2xl font-bold leading-none text-gray-800 whitespace-nowrap">
            {/* Original text */}
            <span
              className="
                transition-all duration-600 ease-in-out
                row-start-1 col-start-1 text-left
                group-hover:-translate-y-full group-hover:opacity-0
              "
            >
              Gui&nbsp;Oba
            </span>

            {/* Hover text */}
            <span
              className="
                transition-all duration-600 ease-in-out
                row-start-1 col-start-1
                translate-y-full opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              Guilherme&nbsp;Oba&nbsp;de&nbsp;Mesquita&nbsp;Sampaio
            </span>
          </span>
        </div>

        {/* Right: Date */}
        <div className="mt-2 md:mt-0 text-center md:text-right">
          {new Date().getFullYear()} {new Date().getMonth() + 1}{' '}
          {new Date().getDate()}
        </div>
      </div>
    </header>
  );
}
