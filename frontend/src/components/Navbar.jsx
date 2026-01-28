import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/assest'

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'Learn', path: '/learn' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Left */}
          <div className="shrink-0">
            <img 
              src={img.brandlogo} 
              alt="Brand Logo" 
              className="h-8 w-auto md:h-10"
            />
          </div>

          {/* Desktop Nav Links - Center */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                        isActive ? 'text-orange-600' : 'text-gray-700'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden lg:block">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700  transition-colors duration-200 font-medium">
              Get a proposal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="w-full mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium">
            Get a proposal
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar