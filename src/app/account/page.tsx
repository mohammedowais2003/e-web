import React from 'react';

import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const Account = () => {
  return (
    <div>
      <NavBar />

      {/* First Section with Tailwind Background */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center bg-shop-bg">
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Account</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Account</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
      </section>

      {/* 2nd Section: Login and Register */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Column */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold">Login</h1>
              <form className="space-y-4">
                {/* Username or Email */}
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="email"
                  >
                    Username or Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Password */}
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-lg">
                    Remember Me
                  </label>
                </div>
                {/* Login Button */}
                <button className="w-full sm:w-auto py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button>
                {/* Lost Password Link */}
                <div className="text-center mt-4">
                  <Link href="#" className="text-lg text-blue-600">
                    Lost your password?
                  </Link>
                </div>
              </form>
            </div>

            {/* Register Column */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold">Register</h1>
              <form className="space-y-4">
                {/* Email Address */}
                <div>
                  <label
                    className="block text-lg font-semibold"
                    htmlFor="registerEmail"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Register Information */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    A link to set a new password will be sent to your email
                    address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our privacy policy.
                  </p>
                </div>
                {/* Register Button */}
                <button className="w-full sm:w-auto py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* First Column */}
            <div>
              <h2 className="text-black font-bold text-2xl sm:text-3xl">
                Free Delivery
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>

            {/* Second Column */}
            <div>
              <h2 className="text-black font-bold text-2xl sm:text-3xl">
                90 Days Return
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                If the product has an issue, consectetur adipim scing elit.
              </p>
            </div>

            {/* Third Column */}
            <div>
              <h2 className="text-black font-bold text-2xl sm:text-3xl">
                Secure Payments
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                100% secure payments, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Account;
