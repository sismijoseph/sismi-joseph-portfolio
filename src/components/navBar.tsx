"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center z-50">
      {/* Logo / Name */}
      <h2 className="text-xl md:text-2xl font-bold text-white">
        Sismi Joseph
      </h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg text-white">
        <Link href="#home" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="#about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="#projects" className="hover:text-blue-600">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden text-white">
          <Link
            href="#home"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
