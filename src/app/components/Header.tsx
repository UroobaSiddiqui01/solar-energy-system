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
    <header className="bg-yellow-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mezan</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/#">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

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
        <nav className="md:hidden bg-yellow-700 text-white space-y-2 p-4">
          <Link href="/#">
            <a className="block" onClick={toggleMenu}>Home</a>
          </Link>
          <Link href="/#about">
            <a className="block" onClick={toggleMenu}>About Us</a>
          </Link>
          <Link href="/#services">
            <a className="block" onClick={toggleMenu}>Services</a>
          </Link>
          <Link href="/#contact">
            <a className="block" onClick={toggleMenu}>Contact</a>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;


