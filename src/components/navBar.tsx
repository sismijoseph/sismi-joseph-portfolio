"use client"; // for Next.js 13+ App Router if needed
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center z-50">
      <h2 className="text-2xl font-bold">Sismi Joseph</h2>
      <div className="flex gap-8 text-lg">
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
    </nav>
  );
}
