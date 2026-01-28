import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/deploy-logo.png";

function Header({ simple = false }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/Howitworks" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/About" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="CashMish Logo" 
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" 
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                CashMish
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {!simple && (
              <a
                href="/login"
                className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Sign Up
              </a>
            )}
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 mt-2 bg-white rounded-lg shadow-md">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {!simple && (
                <a
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-bold shadow-sm hover:bg-blue-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
