"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Only render on client after mount to ensure theme is correctly loaded
  useEffect(() => {
    setMounted(true);
     // Ensure default theme is dark on first visit
  if (!localStorage.getItem("theme")) {
    setTheme("dark");}
  }, []);

  if (!mounted) {
    // Option 1: Return null to avoid rendering mismatched content
    return null;
    // Option 2: Render a fallback that doesn't depend on the theme
  }

  return (
    <nav className="py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="container w-full max-w-7xl px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
  <Link href="/" className="flex items-center">
    {/* Logo */}
    <img 
      src="/logo.svg" 
      alt="Dental Veneer Predict Logo" 
      className={`h-10 w-auto transition-all duration-300 ${theme === "light" ? "filter invert" : ""}`} 
    />
    
    {/* Veneera Text with Gradient */}
    <span className="text-3xl ml-2 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
     Veneera
    </span>
  </Link>
</div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
            {/* <Link
              href="/predict"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Predict
            </Link> */}
            <Link
              href="/pricing"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </Link>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
              
            <Link
              href="/predict"
            >
              <button className="bg-gradient-to-r  from-blue-600 to-purple-700 text-white border shadow-[0px_0px_12px_#8c45ff] rounded-xl px-4 py-2 hover:from-blue-700 hover:to-purple-800 transition-colors">
              Try Now!
            </button>
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white border shadow-[0px_0px_12px_#8c45ff] rounded px-3 py-1 text-sm hover:from-blue-700 hover:to-purple-800 transition-colors w-full text-left">
                Try Now!
              </button>
              <Link
                href="/about"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/predict"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Predict
              </Link>
              <Link
                href="/services"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
