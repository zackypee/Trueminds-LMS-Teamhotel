import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-[#E2E8F080] relative">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-[#1E3A5F]">
        Talent<span className="text-[#0029F5]">Flow</span>
      </h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link to="#" className="text-lg text-[#6B7280] hover:text-[#0029F5]">
            Browse Courses
          </Link>
        </li>
        <li>
          <Link to="#" className="text-lg text-[#6B7280] hover:text-[#0029F5]">
            About Us
          </Link>
        </li>
        <li>
          <Link to="#" className="text-lg text-[#6B7280] hover:text-[#0029F5]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex gap-3 items-center">
        <Link
          to="/login"
          className="text-lg text-[#6B7280] hover:text-[#0029F5] px-4 py-2"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="text-lg bg-[#0029FD] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#1E3A5F] text-3xl"
        onClick={() => setMenuOpen(true)}
      >
        <RiMenu3Line />
      </button>

      {/* Mobile Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-8 py-6">
          {/* Top - Logo and Close */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold text-[#1E3A5F]">
              Talent<span className="text-[#0029F5]">Flow</span>
            </h1>
            <button
              className="text-[#1E3A5F] text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              <RiCloseLine />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-6 list-none flex-1">
            <li>
              <Link
                to="#"
                className="text-xl text-[#6B7280]"
                onClick={() => setMenuOpen(false)}
              >
                Browse Courses
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-xl text-[#6B7280]"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-xl text-[#6B7280]"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Bottom Auth Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <Link to="/" className="text-lg text-[#6B7280] text-center">
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-[#0029FD] text-white text-center text-lg py-3 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
