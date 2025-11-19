import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white backdrop-blur-lg bg-opacity-95 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-cyan-50 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <NavLink to="/">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-gray-400/25">
                  <span className="text-white font-bold text-xl transform -rotate-12">
                    Z
                  </span>
                  {/* Lightning bolt effect */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  ZapShift
                </span>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-1"></div>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="service"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>

            <NavLink
              to="/coverage"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
            >
              Coverage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>

            <a
              href="#"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#"
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 group"
            >
              Be a Rider
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 group">
              Sign In
              <div className="w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 transition-all duration-300 group-hover:w-full mt-1"></div>
            </button>
            <button className="px-6 py-2.5 bg-[#CAEB66] text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CAEB66]/40 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover:bg-[#d5f075] border border-transparent hover:border-[#CAEB66]">
              <span>Be a Rider</span>
              <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 border border-gray-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-lg p-4 space-y-3 border border-gray-200 shadow-lg">
            <a
              href="#"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <span>Services</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            <NavLink
              to="coverage"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-indigo-500"
            >
              <div className="flex items-center justify-between">
                <span>Coverage</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </NavLink>

            <a
              href="#"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-cyan-500"
            >
              <div className="flex items-center justify-between">
                <span>About Us</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            <a
              href="#"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <span>Pricing</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            <a
              href="#"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-indigo-500"
            >
              <div className="flex items-center justify-between">
                <span>Be a Rider</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            <a
              href="#"
              className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 group border-l-4 border-cyan-500"
            >
              <div className="flex items-center justify-between">
                <span>Sign In</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            <button className="w-full py-3 bg-[#CAEB66] text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CAEB66]/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mt-2 hover:bg-[#d5f075] border border-transparent hover:border-[#CAEB66]">
              <span>Be a Rider</span>
              <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="h-1 w-full bg-gray-100">
        <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 w-1/3 animate-pulse"></div>
      </div>
    </nav>
  );
};

export default Navber;
