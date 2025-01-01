'use client'

import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-3xl">NP</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Technologies</NavLink>
              <NavLink href="#">Projects</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#" mobile>Home</NavLink>
            <NavLink href="#" mobile>About</NavLink>
            <NavLink href="#" mobile>Technologies</NavLink>
            <NavLink href="#" mobile>Projects</NavLink>
            <NavLink href="#" mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, mobile = false }) => (
  <a
    href={href}
    className={`text-white hover:text-gray-400 ${
      mobile ? 'block px-3 py-2 rounded-md text-base font-medium' : 'text-sm font-medium'
    }`}
  >
    {children}
  </a>
);

export default Navbar;

