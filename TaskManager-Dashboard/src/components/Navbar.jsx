import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

/**
 * Responsive Navbar component with Theme Toggle for PLP Task Manager
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="PLP Logo" className="h-8 w-8" />
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              PLP Task Manager
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              About
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              About
            </Link>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-5 h-5" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5" /> Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
