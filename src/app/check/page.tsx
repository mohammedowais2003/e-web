import React from 'react';

import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';

const Checkout = () => {
  return (
    <div>
      <NavBar />
      {/* First Section: Header */}
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Check out</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Check out</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
      </section>

      {/* Billing Details & Product Info Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold">Billing Details</h1>
              <form className="space-y-4">
                {['First Name', 'Last Name', 'Company Name (optional)', 'Country/Region', 'Street Address', 'Town/City', 'Province', 'ZIP Code', 'Phone', 'Email'].map(
                  (label, index) => (
                    <div key={index}>
                      <label
                        className="block text-base font-semibold"
                        htmlFor={label.toLowerCase().replace(/ /g, '')}
                      >
                        {label}
                      </label>
                      <input
                        type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'}
                        id={label.toLowerCase().replace(/ /g, '')}
                        placeholder={`Enter your ${label.toLowerCase()}`}
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                  )
                )}
                {/* Additional Information */}
                <div>
                  <label className="block text-base font-semibold" htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    placeholder="Any additional information"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </form>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold">Product Summary</h1>
              <div className="space-y-4">
                <div className="flex justify-between text-base">
                  <span>Asgaard Sofa *1</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span>Subtotal</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>Rs 250,000.00</span>
                </div>
              </div>
              <hr />
              <h3 className="font-bold text-lg flex items-center space-x-2">
                <span className="w-3 h-3 bg-black rounded-full"></span>
                <span>Direct Bank Transfer</span>
              </h3>
              <p className="text-sm mt-2">
                Make your payment directly into our bank account. Please use your order ID as the payment reference. Your order will not be shipped until your funds clear.
              </p>
              <h3 className="font-bold text-lg mt-4">Cash on Delivery</h3>
              <p className="text-sm mt-2">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Delivery Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Free Delivery', '90 Days Return', 'Secure Payments'].map((title, index) => (
            <div key={index} className="text-center">
              <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
              <p className="text-sm md:text-lg text-gray-700 mt-2">
                {index === 0 && 'For all orders over $50.'}
                {index === 1 && 'If the product has an issue.'}
                {index === 2 && '100% secure payments.'}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
