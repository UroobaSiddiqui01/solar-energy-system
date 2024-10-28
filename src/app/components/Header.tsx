"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-yellow-300 text-gray-800 p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo on the Left */}
        <h1 className="text-xl font-bold">Mezan</h1>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex space-x-6 mx-auto">
          <Link href="/#">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Button on the Right */}
        <div className="hidden md:block">
          <Link href="/resume" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Download Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-yellow-400 text-gray-800 space-y-3 p-4">
          <Link href="/#" className="block" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/#about" className="block" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/#services" className="block" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/#contact" className="block" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/resume" className="block bg-yellow-500 text-white px-4 py-2 rounded text-center hover:bg-yellow-600" onClick={toggleMenu}>
            Download Resume
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;






