import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-gray-600 text-sm">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400 mb-2 sm:mb-0"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md sm:rounded-r-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <hr className="mb-4" />
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
