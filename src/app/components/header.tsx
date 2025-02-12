"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-sky-800 flex justify-between items-center px-6 md:px-20 max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div>
        <h2 className="text-white font-bold text-2xl">Travel</h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-9 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="absolute top-16 left-0 w-full bg-sky-800 text-white flex flex-col items-center py-4 z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
