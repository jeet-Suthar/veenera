// components/Footer.js
import * as React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Footer Grid Layout - More Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Info (Veneera AI with Gradient) */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-800 to-purple-950 bg-clip-text text-transparent">
              Veneera AI
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering dental professionals with AI-driven SaaS solutions for precise diagnostics and patient care.
            </p>
          </div>

          {/* Quick Links - Minimal */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Minimal */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Email: support@veneera.ai</li>
              <li className="text-gray-400 text-sm">Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright - Minimal */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.621h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.621h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.327 3.608 1.302.975.975 1.24 2.242 1.302 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.327 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.327-3.608-1.302-.975-.975-1.24-2.242-1.302-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.327-2.633 1.302-3.608.975-.975 2.242-1.24 3.608-1.302 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.736 0 8.332.012 7.052.07c-1.44.065-2.799.324-3.831 1.356C1.837 2.173 1.078 3.532.999 4.972.941 6.252.929 6.656.929 12s.012 5.748.07 7.028c.079 1.44.838 2.799 1.851 3.831 1.032 1.032 2.391 1.772 3.831 1.851 1.28.059 1.684.071 4.971.071s3.691-.012 4.971-.071c1.44-.079 2.799-.838 3.831-1.851 1.032-1.032 1.772-2.391 1.851-3.831.059-1.28.071-1.684.071-4.971s-.012-3.691-.071-4.971c-.079-1.44-.838-2.799-1.851-3.831-1.032-1.032-2.391-1.772-3.831-1.851C15.668.012 15.264 0 12 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 112.88 0 1.44 1.44 0 01-2.88 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Copyright - Minimal */}
          <p className="text-gray-500 text-xs">
            © {currentYear} Veneera AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}