import React from 'react';
import { Activity, User, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'prediction') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-600 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-white" />
                <span className="ml-2 text-white text-xl font-semibold">HealthPredict AI</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => onNavigate('prediction')}
                  className="text-blue-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Disease Prediction
                </button>
                <a href="#" className="text-blue-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Health Information
                </a>
                <a href="#" className="text-blue-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-blue-600 p-1 rounded-full text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              >
                <span className="sr-only">View user profile</span>
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => onNavigate('home')}
            className="bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('prediction')}
            className="text-blue-100 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Disease Prediction
          </button>
          <a href="#" className="text-blue-100 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Health Information
          </a>
          <a href="#" className="text-blue-100 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-blue-800">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <User className="h-10 w-10 text-blue-200" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">User</div>
              <div className="text-sm font-medium leading-none text-blue-200">user@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;